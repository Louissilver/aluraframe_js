class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._ListaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#NegociacoesView')),
            'AdicionarNegociacao', 'Esvaziar')

        this._Mensagem = new Bind(
            new Mensagem(), new MensagemView($('#MensagemView')),
            'Texto');
    }

    Adicionar(event) {
        event.preventDefault();
        this._ListaNegociacoes.AdicionarNegociacao(this._CriaNegociacao());
        this._Mensagem.Texto = 'Negociação adicionada com sucesso!';
        this._LimpaFormulario();
    }

    ImportarNegociacoes() {
        
        let service = new NegociacaoService();

        service.ObterNegociacoesDaSemana((erro, negociacoes) => {
            if(erro){
                this._Mensagem.Texto = erro;
                return;
            }
            negociacoes.forEach(negociacao => this._ListaNegociacoes.AdicionarNegociacao(negociacao));
            this._Mensagem.Texto = 'Negociações importadas com sucesso';
        });
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
}