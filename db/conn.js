const mongoose =require('mongoose');
const db = process.env.DATABASE;
mongoose.connect(db).then(()=>{
    console.log('connected suceesful');
}).catch((err)=>{
    console.log(err)
})