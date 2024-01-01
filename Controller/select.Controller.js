const selectController = require('express').Router();
const selectModel = require("../Model/select.Model");

// ENDPOINTS -GET ALL THE SELECT DATA
// PATH: http://localhost:5000/api/select

selectController.get("/",(request,response,next)=>{
    selectModel.find()
    .then((data)=>{
        if(data.length > 0){
            return response.status(200).json({
                Message: "Select Matchingggg!! 😎",
                result: data,
            })  
        }else{
            return response.status(200).json({
                Message: "No Select Found 😰",
                result: data,
            })
        }   
    })
    .catch((err)=>{
        return response.status(400).json({
            Message: "Error occured ❌",
            result: err,
        });
    });
});

//POST REQUEST
selectController.post('/create',(request,response,next)=>{
    console.log("COLOR DATA",request.body)
    const {
        selectName,
        selectDescription,
        selectId,
        selectImage,
        createdAt,
        updatedAt,
    } = request.body;
    const select = new selectModel({
        selectName,
        selectDescription,
        selectId,
        selectImage,
        createdAt,
        updatedAt,
    });
    select.save()
    .then((data)=>{
        if(data.length > 0){
            return response.status(200).json({
                Message: "Contact Created Successfully 🎉",
                result: data,                
            });
        }
    })
    .catch((err)=>{
        return response.status(400).json({
            Message: "Error occured while creating contact ❌",
            result: err,
        });
    });
});

module.exports = selectController;