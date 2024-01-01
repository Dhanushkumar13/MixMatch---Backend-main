const contactController = require('express').Router();
const contactModel = require('../Model/contact.Model');

// ENDPOINTS -POST CONTACT INFO 
// PATH: http://localhost:5000/api/create
contactController.get("/",(request,response,next)=>{
    contactModel.find()
    .then((data)=>{
        if(data.length > 0){
            return response.status(200).json({
                Message: "Contact Identified!! 😎",
                result: data,
            })  
        }else{
            return response.status(200).json({
                Message: "No Contact Found 😰",
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
contactController.post('/create',(request,response,next)=>{
    console.log("CONTACT DATA",request.body)
    const {
        contactName,
        contactEmail,
        contactSubject,
        contactMessage,
        createdAt,
        updatedAt,
    } = request.body;
    const contact = new contactModel({
        contactName,
        contactEmail,
        contactSubject,
        contactMessage,
        createdAt,
        updatedAt,
    })
    contact.save()
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

module.exports = contactController;