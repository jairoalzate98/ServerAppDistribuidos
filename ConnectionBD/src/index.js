const app = require('./config/server');

require('./app/routes/principal')(app);

//starting the server

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});