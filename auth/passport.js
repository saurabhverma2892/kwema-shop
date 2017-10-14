"use strict"

let passport = require("passport");
let LocalStrategy = require('passport-local').Strategy;
let sequelize = require('sequelize');


module.exports = app => {

    let Student = app.models.student.Student;
    let User = app.models.user.User;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(student, done) {
            console.log("working in serilize");
            done(null, student);
        });

    passport.deserializeUser(function(student, done) {
        if(student.curp){
            Student.findOne({
                where:{
                    id:student.id
                }
            }).then(student=>{
                done(null, student)
            })
        }
        else
        {
            User.findOne({
                where:{
                    id:student.id
                }
            }).then(user=>{
                done(null, user);
            })
        }
        
    });


    passport.use('local-login', new LocalStrategy({
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

    passport.use('admin-login', new LocalStrategy({
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
    ));

    return passport;

}