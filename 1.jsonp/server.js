let express = require('express');
let app = express();

app.get('/say',function (req,res) {
  let {wd,cb} = req.query;
  res.end(`${cb}('no no')`)
})
app.listen(3000);