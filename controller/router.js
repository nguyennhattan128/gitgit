let studentController = require('./handle/studentController');
const Router = {
    "home" : studentController.showStudent
}
module.exports = Router;


