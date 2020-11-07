class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ListaNegociacoes = new ListaNegociacoes();
    }

    Adicionar(event) {
        event.preventDefault();

        this._ListaNegociacoes.AdicionarNegociacao(this._CriaNegociacao());
        this._LimpaFormulario();

        console.log(this._ListaNegociacoes.Negociacoes);
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