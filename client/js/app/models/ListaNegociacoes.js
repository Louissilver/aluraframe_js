class ListaNegociacoes {
    constructor() {
        this._Negociacoes = [];
    }

    AdicionarNegociacao(negociacao) {
        this._Negociacoes.push(negociacao);
    }

    get Negociacoes() {
        return [].concat(this._Negociacoes);
    }

    Esvaziar() {
        this._Negociacoes = [];
    }

    get VolumeTotal() {
        return this._Negociacoes.reduce((total, n) => total + n.Volume, 0.0);
    }

    Ordenar(criterio) {
        this._Negociacoes.sort(criterio);        
    }

    InverterOrdem() {
        this._Negociacoes.reverse();
    }
}