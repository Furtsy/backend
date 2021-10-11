const jwt = require('jsonwebtoken')

module.exports = {
    jwtEncode: async (payload) => {
        // 31556926 second = 1 year
        let token = new Promise((resolve, reject) => {
            jwt.sign(payload, 'packed_cms_secret_key', { expiresIn: 31556926 }, (err, token) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(token)
                }
            });
        });

        let result = await token;

        return result;
    },
    jwtDecode: async ( payload ) => {
        let data = new Promise(( resolve, reject ) => {
            jwt.verify(payload, 'packed_cms_secret_key', (err, data) => {
                if(err) {
                    return reject(err)
                } else {
                    return resolve(data)
                }
            })
        })

        let result = await data;

        return result;
    }
};