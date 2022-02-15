const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = passport.serializeUser((user, done) => {
  done(null, user.id)
})

module.exports = passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClienSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const user = User.findOne({ googleId: profile.id }).then(
        (existingUser) => {
          if (existingUser) {
            done(null, existingUser)
          } else {
            new User({ googleId: profile.id })
              .save()
              .then((user) => done(null, user))
          }
        }
      )
    }
  )
)
