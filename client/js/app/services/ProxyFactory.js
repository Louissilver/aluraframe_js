class ProxyFactory {
    static Create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._EhFuncao(target[prop])) {

                    return function () {
                        console.log(`interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _EhFuncao(funcao){
        return typeof (funcao) == typeof (Function)
    }
}