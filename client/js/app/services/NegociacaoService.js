class NegociacaoService {

    constructor() {
        this._Http = new HttpService();
    }

    ObterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this._Http
                .Get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(
                        objeto => new Negociacao(
                            new Date(objeto.data),
                            objeto.quantidade,
                            objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana.');
                });
        });
    }

    ObterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this._Http
                .Get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(
                        objeto => new Negociacao(
                            new Date(objeto.data),
                            objeto.quantidade,
                            objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada.');
                });
        });
    }

    ObterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this._Http
                .Get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(
                        objeto => new Negociacao(
                            new Date(objeto.data),
                            objeto.quantidade,
                            objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior.');
                });
        });
    }
}