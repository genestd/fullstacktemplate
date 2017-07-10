var path = require('path');

module.exports = function(app){

  //load fix items from database
  app.get('/', function(req,res){
    console.log('dirname', __dirname  )
    res.sendFile( path.resolve('./server/views/index.html'))
  })

}
