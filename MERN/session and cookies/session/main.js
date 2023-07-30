const express = require('express')
const session = require('express-session')
const app = express()

app.use(express.json())

// Ex.6


// app.use(session({
//     secret: 'secretKey',
//     resave: false,              //determines whether the session should be saved to the session store on every request, even if the session was not modified. Setting it to false optimizes performance by only saving the session when it has been modified
//     saveUninitialized: false,   //indicates whether to save sessions that are uninitialized, meaning they are new but not modified
//     // store:                   //allows you to choose where to store your session data. By default, sessions are stored in memory, but this is not suitable for production as it can lead to memory leaks and application crashes. Instead, you can use session stores like connect-mongo    
//     cookie: { maxAge: 3600000 }
// }))

// app.get('/home', (req, res) => {
//     res.send("Home")
// })


// app.get('/username', (req, res) => {
//     req.session.username = 'Ehab'; // store data in session
//     res.send(`username = ${req.session.username}`)
// });

// app.get('/profile', (req, res) => {
//     const username = req.session.username;  // retrieve data from session
//     res.send(`Hello, ${username}`);
// })

// app.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.log('Error destroying session:', err);
//         } else {
//             res.redirect('/home');
//         }
//     });
// });


// Ex.7


// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

// app.get('/', (req, res) => {
//     res.cookie('username', "HakamQadi")  //set new cookie\
//     res.send("set cookie")
// })

// app.get('/cookie', (req, res) => {
//     const cookieValue = req.cookies.username;   // access cookies
//     res.send(`the cookie is ${cookieValue}`)
// })


// Ex.8
// const { body, validationResult } = require('express-validator');
// app.post('/register', [
//     body('email').isEmail().withMessage('Invalid email address')
// ], (req, res) => {
//     const err = validationResult(req);   // Handle the request and validation results
//     if (!err.isEmpty()) {
//         const errorMessages = err.array()[0].msg  // There are validation err
//         // const errorMessages = err.array().map(error => error.msg);  //if there is more than one validation you must map over them. 
//         console.log('errorMessages ' + errorMessages)
//         return res.status(400).json({ err: errorMessages });
//     }
//     res.json({ message: 'User created successfully' });
// })


// Ex.9
// const helmet = require('helmet');
// app.use(helmet());

// //header is a security measure that helps prevent clickjacking attacks by controlling how your website can be embedded in frames or iframes on other websites
// //his value indicates that your website should not be loaded in a frame or iframe on any other website. It ensures that your website cannot be embedded within another page, preventing clickjacking attacks. Browsers will simply refuse to render your website within a frame.
// app.use(helmet.frameguard({ action: 'deny' }));

// // By using helmet.xssFilter(), the X-XSS-Protection header with the value '1; mode=block' will be set. This value enables the browser's XSS filter and instructs it to block the rendering of the page if an XSS attack is detected.
// app.use(helmet.xssFilter())


// Ex.10
// const cors = require('cors');
// app.use(cors());


// Ex.11
// const compression = require('compression');
// app.use(compression());


// Ex.12
// const morgan = require('morgan');
// app.use(morgan(':method :url :status'));


// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

app.listen(8080, () => {
    console.log('http://localhost:8080')
})