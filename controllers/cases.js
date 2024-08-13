const express = require('express');
const Case = require('../models/Case');
const { validationCase } = require('../helper/validate');
const fs = require('fs');
const path = require('path');
const { title } = require('process');

const list = (req, res, next) => {
    Case.find().sort({_initDate: -1}).then(objs => res.status(200).json({
        message: "Cases list retrieved",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "Error",
        obj: ex
    }));
}

const index = (req, res, next) => {
    const id = req.params.id;

    Case.findOne({"_id": id}).then(obj => res.status(200).json({
        message: `Case found with id: ${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "Cannot retrieve case",
        obj: ex
    }))
}

const create = (req, res, next) => {
    const { firstName, lastName, initDate, caseState, caseType, caseDescription, imageReference } = req.body;
    const lastUpdateDate = initDate;
    const deadline = initDate;
    const myCase = new Case({
        ...req.body,
        lastUpdateDate: lastUpdateDate,
        deadline: deadline,
        imageReference: imageReference
    });

    console.log(myCase.caseDescription)


    myCase.save()
        .then(obj => res.status(200).json({
            message: "Case created",
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            message: "Couldn't create object",
            obj: ex
        }));
}

const destroy = (req, res) => {
    const id = req.params.id;
    Caso.findByIdAndDelete(id).then(
        obj => res.json(obj)
    ).catch(error => res.send(error));
}

const update = (req, res, next) => {
    //Pick id
    const id = req.params.id

    //Colect new data
    const { firstName, lastName, initDate, caseState, caseType, caseDescription, imageReference } = req.body;

    console.log(req.body)

    // try{
    //     validationCase(req.body);
    // }catch(error){
    //     return res.status(400).json({
    //         status: error,
    //         message: 'Missing data'
    //     })
    // };


    //Create our updated object
    const lastUpdateDate = initDate;
    const deadline = initDate;
    const myCase = new Case({
        _id: id,
        ...req.body,
        lastUpdateDate: lastUpdateDate,
        deadline: deadline
    });

    console.log(myCase.caseDescription)

    //Update method, we retrieve the id from the parameters
    //of the url, and give it the object we created with the 
    //data in our body
    Case.updateOne({_id: req.params.id}, myCase).then(obj => res.status(200).json({
        message: 'Object updated succesfully',
        obj: obj
    })).catch(error => res.status(500).json({
        message: 'Cannot update object',
        obj: error
    }))
}

const imageReference = (req, res) => {
    let ficher = req.params.ficher;
    let pathImg = "../images/casos/"+ficher;

    fs.stat(pathImg, (error, exists) => {
        if(exists){
            return res.sendFile(path.resolve(pathImg))
        }else{
            return res.status(404).json({
                status: 'Error',
                message: 'The image does not exist.'
            })
        }
    })
}

module.exports = {
    list,
    index,
    create,
    destroy,
    update,
    imageReference
}
