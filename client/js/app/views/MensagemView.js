class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }
    Template(model) {
        return model.Texto ? `<p class="alert alert-info">${model.Texto}</p>` : '<p></p>';
    }
}