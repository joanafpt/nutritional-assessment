const validateIfNumeric = (str) => {
    var plusWord = 'Mais';
    var minusWord = 'Até';
    var maxVal, medMinVal, medMaxVal, minVal;
    var caughtVal = [];
    var quantificatorWord = str.substr(0, str.indexOf(' '));
    var divided = str.split(' ', str.length);
    var numberPattern = /\d+/g;
    for (var y = 0; y < divided.length; y++) {
        if (divided[y].match(numberPattern)) {
            caughtVal.push(divided[y]);
        }
    }
    if (quantificatorWord === plusWord) {
        maxVal = caughtVal[0];
        maxVal = Number(maxVal);
        return maxVal;
    } else if (quantificatorWord === minusWord) {
        minVal = caughtVal[0];
        minVal = Number(minVal);
        return minVal;
    } else {
        medMinVal = caughtVal[0];
        medMaxVal = caughtVal[1];
        return [medMinVal, medMaxVal];
    }
}

var highStr = 'Teor alto de ';
var medStr = 'Teor médio de ';
var lowStr = 'Teor baixo de '
var f = 'gordura.';
var sf = 'gordura saturada.';
var sg = 'açúcar.';
var st = 'sal.';
var fatOutput = '';
var satFatOut = '';
var sugarOut = '';
var saltOut = '';

const checkNutritionalValue = (val) => {
    if (val >= 8.75) {
        fatOutput = highStr + f;
        return fatOutput;
    } else if (val <= 1.5) {
        fatOutput = lowStr + f;
        return fatOutput;
    } else {
        fatOutput = medStr + f;
        return fatOutput;
    }
}

const checkSaturFats = (saturfatz) => {
    if (saturfatz >= 2.5) {
        satFatOut = highStr + sf;
        return satFatOut;
    } else if (saturfatz <= 0.75) {
        satFatOut = lowStr + sf;
        return satFatOut;
    } else {
        satFatOut = medStr + sf;
        return satFatOut;
    }
}
const checkSugar = (sugarval) => {
    if (sugarval >= 11.25) {
        sugarOut = highStr + sg;
        return sugarOut;
    } else if (sugarval <= 2.5) {
        sugarOut = lowStr + sg;
        return sugarOut;
    } else {
        sugarOut = medStr + sg;
        return sugarOut;
    }
}

const checkSalt = (saltval) => {
    if (saltval >= 0.75) {
        saltOut = highStr + st;
        return saltOut;
    } else if (saltval <= 0.3) {
        saltOut = lowStr + st;
        return saltOut;
    } else {
        saltOut = medStr + st;
        return saltOut;
    }
}

const checkNutritionalValueSolids = (gordura) => {
    if (gordura > 17.4) {
        fatOutput = highStr + f;
        return fatOutput;
    }
    else if (gordura <= 3) {
        fatOutput = lowStr + f;
        return fatOutput;
    }
    else {
        fatOutput = medStr + f;
        return fatOutput;
    }
}
const checkSaturFatsSolids = (gordSat) => {
    if (gordSat >= 5) {
        satFatOut = highStr + sf;
        return satFatOut;
    }
    else if (gordSat <= 1.5) {
        satFatOut = lowStr + sf;
        return satFatOut;
    }
    else {
        satFatOut = medStr + sf;
        return satFatOut;
    }

}
const checkSugarSolids = (acuc) => {
    if (acuc >= 22.5) {
        sugarOut = highStr + sg;
        return sugarOut;
    }
    else if (acuc <= 5) {
        sugarOut = lowStr + sg;
        return sugarOut;
    }
    else {
        sugarOut = medStr + sg;
        return sugarOut;
    }
}
const checkSaltSolids = (sal) => {
    if (sal > 1.4) {
        saltOut = highStr + st;
        return saltOut;
    }
    else if (sal <= 0.3) {
        saltOut = lowStr + st;
        return saltOut;
    }
    else {
        saltOut = medStr + st;
        return saltOut;
    }
}



const functions = {
    validateIfNumeric: validateIfNumeric,
    checkNutritionalValue: checkNutritionalValue,
    checkSaturFats: checkSaturFats,
    checkSugar: checkSugar,
    checkSalt: checkSalt,
    checkNutritionalValueSolids: checkNutritionalValueSolids,
    checkSaturFatsSolids: checkSaturFatsSolids,
    checkSugarSolids: checkSugarSolids,
    checkSaltSolids: checkSaltSolids,
}

export default functions;