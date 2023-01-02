const express = require('express')
const app = express()
const port = 5432
var html_path = __dirname + '.\\htmls';

app.use(express.static(__dirname + '/htmls'));

app.get('/', (req, res) => {
    res.sendFile("./htmls/index.html", {root:__dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})