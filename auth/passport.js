"use strict"

let passport = require("passport");
let LocalStrategy = require('passport-local').Strategy;
let sequelize = require('sequelize');
var generator = require('generate-password');



module.exports = app => {

    let User = app.models.user.User;
    let mailService = app.services.mailService;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
            console.log("working in serilize");
            done(null, user);
    });

    passport.deserializeUser(function(user, done) {
            User.findOne({
                where:{
                    id:user.id
                }
            }).then(user=>{
                done(null, user);
            }).catch(err=>{
                done(null, false);
            })      
    });


    /*passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

      process.nextTick(function() {

                Student.find({ where: {email: email} }).then(function(student) {

                    if (student) {
                        var test = student.validPassword(password);
                        if(test){
                            student.password = undefined;
                            return done(null, student);
                        }
                        return done(null, false);
                    } 
                });
          })
        }
    ));

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
      process.nextTick(function() {
                console.log("workin in here");
                User.find({ where: {email: email} }).then(function(user) {
                    if (user) {
                        var test = user.validPassword(password);
                        if(test){
                            user.password = undefined;
                            return done(null, user);
                        }
                        return done(null, false);
                    } 
                });
          })
        }
    ));*/


    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {

            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function() {
                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({where:{email:email}}).then(user=>{
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        User.create({
                            email:email,
                            password:password,
                            firstName:req.body.firstName,
                            lastName:req.body.lastName
                        }).then(newUser=>{
                            return done(null,newUser);
                        }).catch(err=>{
                            return done(null, false, req.flash('signupMessage', 'Error in creating user '+err));
                        })
                    }
                }).catch(err=>{
                    return done(err);
                })
  
            });

    }));

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({where:{email:email}}).then(user=>{
                if(!user){
                    return done(null, false, req.flash('signupMessage', 'No user found.'));
                }
                else
                {
                    if(!user.validPassword(password)){
                        return done(null, false, req.flash('signupMessage', 'Oops! Wrong password.'));
                    }
                    else
                    {
                        return done(null, user);
                    }
                }
            }).catch(err=>{
                return done(null, false, req.flash('signupMessage', 'Error in finding user '+err));
            });

    }));



    passport.use('local-checkout-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'firstName',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            console.log("herhehehehr");
            console.log("workignnnn");
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            var password = generator.generate({
                length: 10,
                numbers: true
            });


            User.findOne({where:{email:email}}).then(user=>{
                if(!user){
                    User.create({
                        email:email,
                        firstName:req.body.firstName,
                        address:req.body.address,
                        city:req.body.city,
                        phone:req.body.phone,
                        state:req.body.state,
                        zipCode:req.body.zipCode,
                        role:"buyer",
                        verified:false,
                        registered:false,
                        country:req.body.country,
                        areaCode:req.body.areaCode,
                        password:password
                    }).then(userData=>{
                        mailService.sendRegistrationMail(userData,password);
                        return done(null, userData);
                    }).catch(err=>{
                        console.log(err);
                        return done(null,false, req.flash('signupMessage','error creating user'));
                    })
                }
                else
                {
                    return done(null, false,req.flash('signupMessage', 'User already exists. Please login to continue'));
                }
            }).catch(err=>{
                return done(null, false, req.flash('signupMessage', 'Error in finding user '+err));
            });
    }));

    return passport;

}