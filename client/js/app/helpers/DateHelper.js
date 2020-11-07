class DateHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada.")
    }

    static TextoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}$/) {
            throw new Error('Deve estar no formato aaa-mm-dd');
        }
        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
    }

    static DataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }
}