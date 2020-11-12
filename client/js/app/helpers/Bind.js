class Bind {

    constructor(model, view, ...props) {

       let proxy = ProxyFactory.Create(model, props, model => {
           view.Update(model)
       });

       view.Update(model);
       return proxy;
    }
}