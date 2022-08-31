const  mongoose=require('mongoose')
const schema=mongoose.Schema;

const userschema=new schema(
    {
        name:{type: 'string', required: true},
        email:{type: 'string', required: true,unique: true},
        phone:{type:Number},
        age:{ type:Number},
        isAdmin:{type:Boolean, default: false}
    })
    const User=mongoose.model('User',userschema);
    module.exports=User;