const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

function route(nav){
signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        "uid":req.param("uid"),
        "pwd":req.param("pwd")
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})
return signupRouter;

}

module.exports = route;
