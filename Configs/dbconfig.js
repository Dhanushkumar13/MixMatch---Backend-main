const mongoose = require('mongoose');
let URI;
if(process.env.NODE_ENV === "development"){
    URI = "mongodb://localhost:27017/MixMatch";
}else{
    URI= `mongodb+srv://${process.env.NODE_MONGO_DB_USERNAME}:${process.env.NODE_MONGO_DB_PASSWORD}@zomatoclonebe.vligrcj.mongodb.net/${process.env.NODE_MONGO_DB_NAME}`;
}

mongoose
.connect(`${URI}`)  
.then((data)=>{
    console.log("CONNECT TO::",URI);
})
.catch((err)=>{
    console.log("ERROR COULDN'T CONNECT TO DATABASE!",err);
});