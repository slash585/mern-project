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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        return done(null, existingUser)
      }
      
      const newUser = await new User({ googleId: profile.id }).save()
      done(null, newUser)
    }
  )
)
