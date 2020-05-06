const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching in /refer/able-to-leave
router.post('/refer/family-friends', function (req, res) {

  let able_to_leave = req.session.data['able_to_leave']

  if (able_to_leave === 'yes') {
    res.redirect('/refer/result/yes-able-to-leave')
  } else {
    res.redirect('/refer/family-friends')
  }
})

// Branching in /refer/family-friends
router.post('/refer/local-organisations', function (req, res) {

  let family_friends = req.session.data['family_friends']

  if (family_friends === 'yes') {
    res.redirect('/refer/result/yes-family-friends')
  } else {
    res.redirect('/refer/local-organisations')
  }
})

// Branching in /refer/local-organisations
router.post('/refer/urgent', function (req, res) {

  let local_organisations = req.session.data['local_organisations']

  if (local_organisations === 'yes') {
    res.redirect('/refer/result/yes-local-organisations')
  } else {
    res.redirect('/refer/urgent')
  }
})

// Branching in /refer/urgent
router.post('/refer/result/yes-urgent', function (req, res) {

  let urgent = req.session.data['urgent']

  if (urgent === 'no') {
    res.redirect('/refer/result/not-urgent')
  } else {
    res.redirect('/refer/result/yes-urgent')
  }
})

// Branching in /safeguard/immediate-risk
router.post('/safeguard/signpost', function (req, res) {

  let immediate_risk = req.session.data['immediate_risk']

  if (immediate_risk === 'yes') {
    res.redirect('/safeguard/call-999')
  } else {
    res.redirect('/safeguard/signpost')
  }
})

// Branching in /safeguard/signposted
router.post('/safeguard/already-supported', function (req, res) {

  let advice_needed = req.session.data['advice_needed']

  if (advice_needed === 'yes') {
    res.redirect('/safeguard/yes-advice-needed')
  } else {
    res.redirect('/safeguard/already-supported')
  }
})

// Branching in /safeguard/already-supported
router.post('/safeguard/yes-advice-needed', function (req, res) {

  let advice_needed = req.session.data['advice_needed']
  let already_supported = req.session.data['already_supported']

  if (advice_needed === 'no' && already_supported === 'no') {
    res.redirect('/safeguard/no-advice-needed')
  } else {
    res.redirect('/safeguard/yes-advice-needed')
  }
})


module.exports = router
