const express = require('express');
const Case = require('models/Case');
const { validationCase } = require('helper/validate')
const fs = require('fs');
const path = require('path');

const list = (req, res, next) => {
    Case.find().sort({_initDate: -1}).then(objs => res.status(200).json({
        message: "Cases list retrieved",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "Error",
        obj: ex
    }));
}


