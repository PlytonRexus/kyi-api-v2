const fs = require('fs')

module.exports = {
  readFile: function (path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, function (err, data) {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }
}
