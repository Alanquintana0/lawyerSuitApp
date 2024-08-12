const mongoose = require("mongoose");

const schema = mongoose.schema({
    _name: String,
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
    constructor(name, lastName, initDate, lastUpdateDate, deadline, caseState, caseType, caseDescription, imageReference){
        this._name = name;
        this._lastName = lastName;
        this._initDate = initDate;
        this._lastUpdateDate;
        this._deadline = deadline;
        this._caseState = caseState;
        this._caseType = caseType;
        this._caseDescription = caseDescription;
        this._imageReference = imageReference;
    }

    get name(){
        return this._name;
    }

    set name(value){
        return this._name = value;
    }
}