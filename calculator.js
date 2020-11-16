const sum = (x,y) => {
    result = parseInt(x) + parseInt(y)

    if(isNaN(result)) {
        throw new Error('Valores de input inválidos');
    }

    return result;
}

const sub = (x,y) => {
    result = parseInt(x) - parseInt(y)

    if(isNaN(result)) {
        throw new Error('Valores de input inválidos');
    }

    return result;
}

const mult = (x,y) => {
    result = parseInt(x) * parseInt(y)

    if(isNaN(result)) {
        throw new Error('Valores de input inválidos');
    }

    return result;
}

const div = (x,y) => {
    result = parseInt(x) / parseInt(y)

    if(isNaN(result)) {
        throw new Error('Valores de input inválidos');
    }

    return result;
}

module.exports = {
    sum,
    sub,
    mult,
    div,
}