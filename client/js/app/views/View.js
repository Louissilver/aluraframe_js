class View{
    constructor(elemento){
        this._Elemento = elemento;
    }

    Template(){
        throw new Error("O método Template() deve ser implementado.")
    }

    Update(model){
        this._Elemento.innerHTML = this.Template(model);
    }
}