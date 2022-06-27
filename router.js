
//Imports
const router = require('express').Router();

const UserRouter = require('./views/UserRouter');
const VideoRouter = require('./views/VideoRouter');
const RentalRouter = require('./views/RentalRouter');
const SaleRouter = require('./views/SaleRouter');

router.use('/user', UserRouter);
router.use('/video', VideoRouter);
router.use('/rental', RentalRouter);
router.use('/sale', SaleRouter);

//Export

module.exports = router;