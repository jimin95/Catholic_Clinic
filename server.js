// =======================
// get the packages we need ============
// =======================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config');   //get our config file
var User = require('./app/models/user'); //get our mongoose models
//var crypto = require('crypto'); //protect to password Hashing
/*
var myHash = function myhash(key) {  //hash function
    var hash = bcrypt.hashSync(key, bcrypt.genSaltSync(10));
    return hash;
}
*/

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080;    //used to create, sign, and verify tokens
mongoose.connect(config.database);  //connect to database
app.set('superSecret', config.secret);  //secret variable

//use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route
app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES -------------------
// we'll get to these in a second

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Sever is running at http://localhost:' + port);


// Add user
app.get('/setup', function (req, res) {
    //var pw = '1234';
    //pw = myHash(pw);
    //create a sample user
    var test = new User({
        id: 'test2',
        password: 2222,
        admin: true
    });

    //save the sample user
    test.save(function (err) {
        if (err) throw err;

        console.log('User "test" save successfully');
        res.json({ success: true });
    });
});

// API ROUTES -------------------
// ---------Showing our user------
// create our API routes and create one to return all our users in JSON format.
// We’ll use an instance of the Express router for this.

// get an instance of the router for api routes
var apiRoutes = express.Router();

// TODO: route ro authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.get('/', function (req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function (req, res) {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

/************************ LOGIN ******************************/
// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// API ROUTES -------------------
// ---------authenticate and Creating a Token------
// when the id and pwd is validate

// get an instance of the router for api routes
// var apiRoutes = express.Router(); --> I'll use the 'apiRoutes' already made.

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function (req, res) {
    //find the user
    User.findOne({
        id: req.body.id
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: 'This user is not exist!' });
        }
        else if (user) {
            var validPassword = user.comparePassword(req.body.password);
            //var pwd = myHash(req.body.password); // encode the password by using the myHash function
            // check if password matches
            if (!validPassword) {
                res.json({ success: false, message: 'The password is not same!' });
            }
            else {
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 1440 // expires in 24 hours  --> This row is different from orig. cord!!!!!!
                });

                // return the information including roken as JSON
                res.json({
                    success: true,
                    message: 'Success!',
                    token: token
                });
            }
        }
    });
});


/**************************** REGISTER ***********************/
// API ROUTES -------------------

//app.use('/api', apiRoutes);
apiRoutes.post('/register', memberReg);

function memberReg(req, res) {
    var id = req.body.id;   //post맨 입력 값
    var pw = req.body.password; //post맨 입력 값
    if (id == "") {
        res.end('Error');
    }
    else {
        //check if there is already same id, Collection name: user
        User.findOne({ id: id }, function (err, member) {
            if (err) {
                err.cod = 500;
                return next(err);
            }
            // if the id is not exit then push
            if (member == null) {
                //pw = myHash(pw);
                var myMember = new User({ id: id, password: pw, admin: true });
                myMember.save(function (err, data) {
                    if (err) {
                        console.log('error');
                    }
                    console.log('member is inserted');
                });
                res.redirect('/');
            }
            else {
                res.end('already exist');
            }
        });
    }
}

// API ROUTES -------------------
// ---------Route Middleware to Protext API Routes------
// This code is route Middleware to protect the 2 routes(/api, /api/users)

// get an instance of the router for api routes
// var apiRoutes = express.Router(); --> I'll use the 'apiRoutes' already made.

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
// ...

// route middleware to verify a token
apiRoutes.use(function (req, res, next) {
    // check header or url parameters or post parameters for token 
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    //decode token
    if (token) {
        //veriies secret and checks expires
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate!' });
            }
            else {
                //if everything is good, save to request for use in other routes 
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'NO token provied.'
        });
    }
});

// route to show a random message (GET http://localhost:8080/api/)
// "message":"Welcome to the coolest API on earth!"

// route to return all users (GET http://localhost:8080/api/users)
// show member's information

// apply the routes to our application with the prefix /api
//app.use('/api', apiRoutes);