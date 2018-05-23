'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../middleware/image')
      const productController = require('../controller/product.controller')

/* GET main endpoint. */
router.get('/', productController.getProduct)

router.post('/upload',
  images.multer.single('image'),
  images.sendUploadToGCS,
  productController.uploadFile
  // (req, res) => {
  //   res.send({
  //     status: 200,
  //     message: 'Your file is successfully uploaded',
  //     link: req.file.cloudStoragePublicUrl
    // })
  )

module.exports = router
