class Mensagem {
    constructor(texto = '') {
        this._Texto = texto;
    }

    get Texto() {
        return this._Texto;
    }

    set Texto(texto) {
        this._Texto = texto;
    }
}