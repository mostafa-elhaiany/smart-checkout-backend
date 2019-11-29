const express = require('express')
const router = express.Router()
const controller = require('../controllers/storeControllers.js')

router.get('/', controller.default)

router.post('/', controller.create)

router.get('/:id', controller.read)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

router.get('/:id/items/', controller.allItems)

module.exports = router
