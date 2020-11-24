const calculator = require('../modules/calculator');

exports.processMsg = (message) => {
    console.log(message);
    let utf8data = message.utf8Data;
    let jsonUtf8data = JSON.parse(utf8data);
    jsonUtf8data = trimObj(jsonUtf8data);
    console.log(jsonUtf8data);
    try {
        switch(jsonUtf8data.operator) {
            case '+':
            case 'somar':
                return {status: 'success', content: calculator.sum(jsonUtf8data.first_number, jsonUtf8data.second_number)};
            case '-':
            case 'subtrair':
                return {status: 'success', content: calculator.sub(jsonUtf8data.first_number, jsonUtf8data.second_number)};
            case '/':
            case 'dividir':
                return {status: 'success', content: calculator.div(jsonUtf8data.first_number, jsonUtf8data.second_number)};
            case '*':
            case 'multiplicar':
                return {status: 'success', content: calculator.mult(jsonUtf8data.first_number, jsonUtf8data.second_number)};
        }

        return {status: 'success', content: 'Operador inválido'}
    }
    catch(error) {
        return {status: 'error', content: error.message};
    }
}

function trimObj(obj) {
    if (!Array.isArray(obj) && typeof obj != 'object') return obj;
    return Object.keys(obj).reduce(function(acc, key) {
      acc[key.trim()] = typeof obj[key] == 'string'? obj[key].trim() : trimObj(obj[key]);
      return acc;
    }, Array.isArray(obj)? []:{});
}