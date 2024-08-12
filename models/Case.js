const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _firstName: String,
    _lastName: String,
    _initDate: {
        type: Date,
        default: Date.now
    },
    _lastUpdateDate: {
        type: Date,
        default: Date.now
    },
    _deadline: {
        type: Date,
        default: Date.now
    },
    _caseState: Number,
    _caseType: String,
    _caseDescription: String,
    _imageReference:{
        type:String,
        default:"default.png"
    }
})

class Case{
    constructor(firstName, lastName, initDate, lastUpdateDate, deadline, caseState, caseType, caseDescription, imageReference){
        this._firstName = firstName;
        this._lastName = lastName;
        this._initDate = initDate;
        this._lastUpdateDate = lastUpdateDate;
        this._deadline = deadline;
        this._caseState = caseState;
        this._caseType = caseType;
        this._caseDescription = caseDescription;
        this._imageReference = imageReference;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        return this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        return this._lastName = value;
    }

    get initDate() {
        return this._initDate;
    }

    set initDate(value) {
        return this._initDate =value;
    }

    get lastUpdateDate() {
        return this._lastUpdateDate;
    }
    set lastUpdateDate(value) {
        return this._lastUpdateDate = value;
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        return this._deadline = value;
    }

    get caseState() {
        return this._caseState;
    }

    set caseState(value) {
        return this._caseState = value;
    }

    get caseType() {
        return this._caseType;
    }

    set caseType(value) {
        return this._caseType = value;
    }

    get caseDescription() {
        return this._caseDescription;
    }

    set caseDescription(value) {
        return this._caseDescription = value;
    }

    get imageReference() {
        return this._imageReference;
    }

    set imageReference(value) {
        return this._imageReference = value;
    }
}


schema.loadClass(Case);
module.exports = mongoose.model('Case', schema);
