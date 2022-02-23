

// Express

const app = require('express')();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const http = require('http');

const PORT = process.env.PORT || 3000;

const main_email =  '';

const email_password = '';
var cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ["GET", "POST"]
}));

// Socket setup
//const io = socket(server);
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
var transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
          user: main_email,
          pass: email_password
        }
    });

app.post('/email', urlencodedParser, function (req, res) {
      let change = req.body;

      if(change.email.length<5 || change.email.length>100 || !change.email.includes('@')){
        return res.status(500).send({
          message: 'Failed to send email. Invalid Email.'
        });
      }

      if(change.title.length<5 || change.title.length>20){
        return res.status(500).send({
          message: 'Failed to send email. Invalid Title.'
        });
      }

      if(change.contents.length<5 || change.contents.length>200){
        return res.status(500).send({
          message: 'Failed to send email. Invalid Contents.'
        });
      }
      
      var mailOptions = {
        from: main_email,
        to: main_email,
        subject:  change.title,
        text: "This letter was sent by: " + change.email + " The message is :  "  +change.contents
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.status(500).send({
            message: 'Failed to send email.'
          });
        } else {
          return res.status(200).send({
            message: 'Email sent !'
          });
        }
      });
});

// Middleware
app.use(bodyParser.json());

app.listen(PORT, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info(`Server is running on port ${PORT}.`);
    }
});

