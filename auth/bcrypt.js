const bcrypt = require('bcryptjs');

module.exports = {
    pwEncode: async (password) => {
        let hash = new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return reject(err)
                } else {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            return reject(err)
                        } else {
                            return resolve(hash)
                        }
                    })
                }
            })
        })

        let result = await hash

        return result;
    },
    pwDecode: async (password, realpassword) => {
        let match = new Promise((resolve, reject) => {
            bcrypt.compare(realpassword, password, (err, isMatch) => {
                if (err) {
                    reject(err)
                }
                if (isMatch) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        })

        let result = await match

        return result;
    }
};