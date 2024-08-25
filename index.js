const express = require('express')
const bodyparser = require('body-parser');
const date = require(__dirname + '/date');

const app = express();

var items = ['eat','uss'];
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));


app.get('/',function (req, res) {

  let day = date.getDate()
  res.render('list',{kindOfDay:day, newitems:items})
})

app.post('/', function (req,res) {
  const item = req.body.newItem;
  items.push(item);

  res.redirect('/');

})




app.listen(3000, function () {
  console.log("active");
})
