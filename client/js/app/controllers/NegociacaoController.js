class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._ListaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#NegociacoesView')),
            'AdicionarNegociacao', 'Esvaziar', 'Ordenar', 'InverterOrdem')

        this._Mensagem = new Bind(
            new Mensagem(), new MensagemView($('#MensagemView')),
            'Texto');

            this._OrdemAtual = '';
    }

    Adicionar(event) {
        event.preventDefault();
        this._ListaNegociacoes.AdicionarNegociacao(this._CriaNegociacao());
        this._Mensagem.Texto = 'Negociação adicionada com sucesso!';
        this._LimpaFormulario();
    }

    ImportarNegociacoes() {

        let service = new NegociacaoService();

        Promise.all([
            service.ObterNegociacoesDaSemana(),
            service.ObterNegociacoesDaSemanaAnterior(),
            service.ObterNegociacoesDaSemanaRetrasada()
        ]).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._ListaNegociacoes.AdicionarNegociacao(negociacao));
            this._Mensagem.Texto = 'Negociações importadas com sucesso';
        }).catch(
            erro => this._Mensagem.Texto = erro
        );
    }

    Apagar() {
        this._ListaNegociacoes.Esvaziar();
        this._Mensagem.Texto = 'Negociações apagadas com sucesso.';
    }

    _CriaNegociacao() {
        return new Negociacao(
            DateHelper.TextoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _LimpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    Ordenar(coluna){
        if(this._OrdemAtual == coluna) {
            this._ListaNegociacoes.InverterOrdem();
        } else {
            this._ListaNegociacoes.Ordenar((a, b) => a[coluna] - b[coluna]);
        }
        this._OrdemAtual = coluna;
    }
}