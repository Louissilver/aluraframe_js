class Negociacao{
    constructor(){
        this._Data = new Date(Data.getTime());
        this._Quantidade = 1;
        this._Valor = 0.0;

        Object.freeze(this);
    }

    get Data(){
        return new Date(this._Data.getTime());
    }

    get Quantidade(){
        return this._Quantidade;
    }

    get Valor(){
        return this._Valor;
    }

    get Volume(){
        return this.Quantidade * this.Valor;
    }
}