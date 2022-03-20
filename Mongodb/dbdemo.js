var mongoinstance = require('mongodb');
var MongoClient = mongoinstance.MongoClient;
var url = 'mongodb://localhost/db_22';

MongoClient.connect(url,{useNewUrlParser:true,
       useUnifiedTopology:true},
       function(err,client){
           if(err){
               throw err;
           }
       
       console.log("connected")
});




        