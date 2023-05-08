const session = require('express-session');
const db =require('../config/db')


class logout {
    static async logoutUser(req,res,next){
        if (req.session) {
            req.session.destroy(function(err) {
                if (err) {
                    next(err);
                } else {
                    res.send("logout succesfully");
                }
            });
        } else {
            res.send("already logged out");
        }
    }

}
  

module.exports = logout;