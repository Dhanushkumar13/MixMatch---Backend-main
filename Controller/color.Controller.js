const colorController = require('express').Router();
const colorModel = require('../Model/color.Model');

colorController.get("/",(request,response,next)=>{
    colorModel.find()
    .then((data)=>{
        if(data.length > 0){
            return response.status(200).json({
                Message: "Color Identified ✅",
                result: data
            })
        }else{
            return response.status(200).json({
                Message: "No Color Identified 🚫",
                result: data,
            })
        }
    })
    .catch((err)=>{
        return response.status(400).json({
            Message: "Error Occured ❌",
            result: err,
        });
    });
});

//POST REQUEST
colorController.post('/create',(request,response,next)=>{
    console.log("Color Data",request.body);
    const{
        colorId,
        colorName,
        colorImage,
        colorDescription,
        createdAt,
        updatedAt,
    } = request.body;

    const color = new colorModel({
        colorId,
        colorName,
        colorImage,
        colorDescription,
        createdAt,
        updatedAt,
    });
    color.save()
    .then((data)=>{
        return response.status(200).json({
            Message: "Created Color Successfully! 🎊",
            result: data,
        })
    })
    .catch((err)=>{
        return response.status(400).json({
            Message: "Error occured while Creating Color 😥",
            result: err,
        });
    });
});

module.exports = colorController;