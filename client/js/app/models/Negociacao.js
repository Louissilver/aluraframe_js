class Negociacao {
    constructor(data, quantidade, valor) {
        this._Data = new Date(data.getTime());
        this._Quantidade = quantidade;
        this._Valor = valor;

        Object.freeze(this);
    }

    get Data() {
        return new Date(this._Data.getTime());
    }

    get Quantidade() {
        return this._Quantidade;
    }

    get Valor() {
        return this._Valor;
    }

    get Volume() {
        return this.Quantidade * this.Valor;
    }
}