const express=require('express');
const User = require('../models/User');
const userRouter=express.Router();
//  GET :  RETURN ALL USERS 
userRouter.get("/", async (req, res) => {
    try {
      let result = await User.find();
      res.send({ users: result, msg: "All users" });
    } catch (error) {
      res.status(400).send({ msg: "can not get all users" });
      console.log(error);
    }
  });
  

//   POST :  ADD A NEW USER TO THE DATABASE 
userRouter.post('/add',async(req,res)=>{
    try {
        const newUser= new User(req.body);
        const reslut=await  newUser.save();
        res.send({user:reslut,msg:"user saved successfully"});
    } catch (error) {
        console.log(error);
    }
}
)

//    PUT : EDIT A USER BY ID 
userRouter.put("/put/:id", async (req, res) => {
    try {
      let result = await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
  
        { $set: { ...req.body } }
      );
      res.send({ userUpdated: result, msg: "user updated" });
    } catch (error) {
      res.status(400).send({ msg: "can not modify the user" });
      console.log(error);
    }
  });


//DELETE : REMOVE A USER BY ID 

userRouter.delete("/delete/:id", async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.params.id });
      res.send({ msg: "user deleted" });
    } catch (error) {
      res.status(400).send({ msg: "can not delete the user" });
      console.log(error);
    }
  });





module.exports=userRouter;