const validator = require('validator');

const validationCase = (data) => {
    console.log(data)
    let validate_firstName = !validator.isEmpty(data.firstName || '') 
                && validator.isLength(data.firstName, { min: 1, max: 60 });

    let validate_lastName = !validator.isEmpty(data.lastName || '') 
                && validator.isLength(data.lastName, { min: 1, max: 60 });
    
    let validate_caseType = !validator.isEmpty(data.caseType || '')
                && validator.isLength(data.caseType, { min: 1, max: 20 });

    let validate_caseDescription = !validator.isEmpty(data.caseDescription || '')
                && validator.isLength(data.caseDescription, { min: 30, max: 1000 });

    if (!validate_firstName || !validate_lastName || !validate_caseType || !validate_caseDescription) {
        throw new Error("Can't validate data.");
    }
}

module.exports = validationCase;