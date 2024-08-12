const validator = require('validator')

const validationCase = (data) => {
    let validate_firstName = !validator.isEmpty(firstName) 
                && validator.isLenght(firstName, {min: 1, max: 60});

    let validate_lastName = !validator.isEmpty(lastName) 
                && validator.isLenght(lastName, {min: 1, max: 60});
    
    let validate_caseType = !validator.isEmpty(caseType)
                && validator.isLenght(caseType, {min: 1, max: 20});
    let validate_caseDescription = !validator.isEmpty(caseDescription)
                && validator.isLenght(caseDescription, {min: 30, max: 1000});

    if(!validate_firstName || !validate_firstName || !validate_caseType || !validate_caseDescription){
        throw new Error("Can't validate data.");
    }
}


module.exports = validationCase;