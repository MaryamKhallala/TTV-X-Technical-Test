module.exports = app => {
    const candidate = require("../controllers/candidate.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", candidate.printToJson);
    
    app.use('/candidate', router);
  };
