const fs = require('fs');

const storeData = (data, path) => {
    try {
      fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }

exports.printToJson = (req, res) => {
    //print req
    console.log(req.body)

    storeData(req.body,'candidate.json')
    res.sendStatus(200);
  };

