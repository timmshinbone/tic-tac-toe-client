'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')

const onSignup = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log(event)
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onPlayerMove = function (event) {
  $(event.target).text('X')
  api.onClick()
    .then(ui.playerMoveSuccess)
}
const newGame = function () {
  console.log(event)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}
module.exports = {
  onSignup,
  onSignIn,
  onChangePassword,
  onSignOut,
  onPlayerMove,
  newGame

}
