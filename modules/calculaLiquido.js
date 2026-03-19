'use strict';

const liquido = (valBruto, valDesconto) => {
    return valBruto - valBruto * valDesconto/100
}
export {liquido};