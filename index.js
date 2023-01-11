const Bamadash = {
    calc(operand1, operand2, operator) {
        switch (operator){
            case '+':
                return Number(operand1) + Number(operand2);
            case '-':
                return Number(operand1) - Number(operand2);
            case '*':
                return Number(operand1) * Number(operand2);
            case "/":
                return Number(operand1) / Number(operand2);
            case "**":
                return Number(operand1) ** Number(operand2);
            default:
                return NaN;
            
        }
    },
    compact(array){
        let newArray = [];
        for (let value of array){
            if (Boolean(value)){
                newArray.push(value);
            }
        }
        
        return newArray;
    },
    intersection(array1,array2, isStrict = true){
        let newArary = []
        for (let array1Value of array1){
            for(let array2Value of array2){
                if (isStrict){
                    if (typeof array1Value == typeof array2Value && array1Value == array2Value){
                        newArary.push(array1Value);
                    }
                } else {
                    if (array1Value.toString() == array2Value){
                        newArary.push(array1Value);
                    }
                }
                
            }
        }
        return newArary;
    },
    size(collection) { 
        if (Array.isArray(collection) || typeof(collection) == "string"){

            return collection.length;
        } else if(typeof collection == "object"){
            let counter = 0;
            for (let property in collection){
                counter++;
            }

            return counter;
        } else {

            return 0;
        }
    },
    castArray(value) {
        let array = [];
        if (typeof value == "undefined"){
            return [];
        } else if (!Array.isArray(value)){
            array.push(value);
            return array;
        }

        return value;
    }
}

//console.log(Bamadash.calc(1, "Bob", '+'));
//console.log(Bamadash.compact([0, 1, false, 2, '', 3]));
//console.log(Bamadash.intersection([1,2,3], [3,'1',6]));
//console.log(Bamadash.size(456));
//console.log(Bamadash.castArray());