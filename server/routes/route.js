const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");// just a google auth library
const clientId =
  "475211951583-iq7scm82arhj4lqat630jvvbc2c3ug5h.apps.googleusercontent.com"; // client id
const AuthClient = new OAuth2Client(clientId);
// console.log(AuthClient);

const User = require("../model/schema"); //importing schemas

router.post("/", (req, res) => {
  const { idToken } = req.body;
  if (idToken) {
    AuthClient.verifyIdToken({ idToken, audience: clientId }) // its just a google auathentication 
      .then((response) => {
        // console.log(response); // it provides thw whole data with response.payload
        const { email_verified, email, name, picture } = response.payload; // collecting data from response.payload

        if (email_verified) { // id email verified is true 
          User.findOne({ email }).exec((err, user) => {// checking if email exists in db
            if (user) {
              return res.json(user); // sends the data if email verified
            }
            else{// if not then creating new user
              const password= email+clientId
              const newUser = new User({email,name,picture,password})
              newUser.save((err,data)=>{
                if(err){
                  return res.status.json({
                    error:"Database Error"
                  })
                }
                res.json(data);//sending data
              })
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
