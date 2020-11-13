class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }
    Template(model) {
        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
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
                            ${model.volumeTotal}
                        </td>
                    </tfoot>
                </table>
        `;
    }
}