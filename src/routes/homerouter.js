const express = require('express'); 
const homeRouter = express.Router();

function route(nav){
homeRouter.get('/',function(req,res){

    res.render('home',{});
    
})
return homeRouter;

}

module.exports = route;
