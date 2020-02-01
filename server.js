// server.js
// load the things we need
var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const user = require("./src/routes/user");
const pdfRoutes = require("./src/routes/pdf");
const draft = require("./src/routes/draft");
var cluster = require('cluster');
const fs = require("fs");


if(cluster.isMaster) 
{
  //  cluster.fork();
  //  cluster.fork();

       // Count the machine's CPUs
       var cpuCount = require('os').cpus().length;

       // Create a worker for each CPU
      //  for (var i = 0; i < cpuCount; i += 1) {
      //      cluster.fork();
      //   }
       cluster.fork();

   cluster.on('disconnect', function(worker) 
   {
       console.error('disconnect!');
       cluster.fork();
   });
} else {
 
          var app = express();

          app.use(bodyParser.urlencoded({ extended: false }));
          app.use(bodyParser.json());
          // app.use(express.static("public"));
          app.use("/uploads", express.static("uploads"));
          app.use(require("morgan")("dev"));
          
          
          //DB Config
          const db = require("./src/config/keys").mongoURI;
          // var mongoDB = "mongodb://127.0.0.1/local_DB";
          
          //Connect to Mongodb
          mongoose
            .connect(db, { useNewUrlParser: true ,useUnifiedTopology: true })
            .then(() => console.log("MongoDB Connected"))
            .catch(err => console.log(err));
          
          // Passport middleware
          app.use(passport.initialize());
          
          // Passport Config
          require("./src/config/passport")(passport);
          
          app.use("/api/pdf", pdfRoutes);
          app.use("/api/user", user);
          app.use("/api/draft", draft);


          var PORT = +process.env.PORT || 8080;
       

          console.log('Worker %d running!', cluster.worker.id)
          app.listen(PORT);
          console.log(`${PORT} is the magic port`);
}



