const dayController = require('express').Router();
const dayModel = require('../Model/day.model');

dayController.get("/",(request,response,next)=>{
    dayModel.find()
    .then((data)=>{
        if(data.length > 0){
            return response.status(200).json({
                Message: "Day Identified ✅",
                result: data
            })
        }else{
            return response.status(200).json({
                Message: "No Day Identified 🚫",
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
dayController.post('/create',(request,response,next)=>{
    console.log("Day Data",request.body);
    const{
        dayId,
        dayName,
        dayDressImage,
        dayDescription,
        createdAt,
        updatedAt,
    } = request.body;

    const day = new dayModel({
        dayId,
        dayName,
        dayDressImage,
        dayDescription,
        createdAt,
        updatedAt,
    });
    day.save()
    .then((data)=>{
        return response.status(200).json({
            Message: "Created Day Successfully! 🎊",
            result: data,
        })
    })
    .catch((err)=>{
        return response.status(400).json({
            Message: "Error occured while Creating Day data 😥",
            result: err,
        });
    });
});

module.exports = dayController;