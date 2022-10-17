const newsRouter = require('./news')
const sitesRouter = require('./sites')

function route(app){

    //route: News
    // app.get('/news', (req, res) => {
    
    //     res.render("news")
    
    // })
    app.use('/news', newsRouter)
    
    // //route: Home
    // app.get('/', (req, res) => {

    //     res.render("home")
    
    // })
   
    
    // //route: Search
    // app.get('/search', (req, res) => {
        
    //     res.render("search")
    
    // })
    app.use('/', sitesRouter)

    //[POST] Method
    // app.post('/search', (req, res) => {
    //     console.log(req.body)
        
    //     res.send('')
    
    // })
}

module.exports = route;