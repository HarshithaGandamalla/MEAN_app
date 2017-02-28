var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://Harshitha:whitec@ds043605.mlab.com:43605/mytasklist_db',['tasks']);

router.get('/tasks',function(req,res,next){
//res.send('TASK API');
  db.tasks.find(function(err,tasks){
     if(err){
     res.send(err);
     }
     res.json(tasks);

  });
});


module.exports=router; //export to access from other files
