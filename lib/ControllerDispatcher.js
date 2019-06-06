function dispatch(controller, action) {

    const controllerInstance = new controller();

    return controllerInstance[action].bind(controller);

}

module.exports = dispatch;