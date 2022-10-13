const express = require('express')
const morgan = require('morgan')
const path = require('path');
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'public')))
//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine(
  {
    extname:'.hbs'  
  }
))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'));
//route: Home
app.get('/', (req, res) => {

  res.render("home")

})
//route: News
app.get('/news', (req, res) => {

  res.render("news")

})
//route: Search
app.get('/search', (req, res) => {
  
  res.render("search")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})