const fs = require('fs');
class ErrorController {
    showNotFound = (req, res) => {
        fs.readFile('./view/error/error.html', "utf-8", (err, errorHtml) => {
            res.write(errorHtml);
            res.end();
        })
    }
}

module.exports = new ErrorController();
