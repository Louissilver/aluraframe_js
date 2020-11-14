class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }
    Template(model) {
        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th onclick="negociacaoController.Ordenar('data')">DATA</th>
                            <th onclick="negociacaoController.Ordenar('quantidade')">QUANTIDADE</th>
                            <th onclick="negociacaoController.Ordenar('valor')">VALOR</th>
                            <th onclick="negociacaoController.Ordenar('volume')">VOLUME</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.Negociacoes.map(n =>`
                                <tr>
                                    <td>${DateHelper.DataParaTexto(n.Data)}</td>
                                    <td>${n.Quantidade}</td>
                                    <td>${n.Valor}</td>
                                    <td>${n.Volume}</td>
                                </tr>
                            `
                        ).join('')}
                    </tbody>

                    <tfoot>
                        <td colspan="3"></td>
                        <td>
                            ${model.VolumeTotal}
                        </td>
                    </tfoot>
                </table>
        `;
    }
}