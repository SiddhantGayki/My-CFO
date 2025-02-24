const mongoose = require('mongoose')

//schema design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Enter Your Name']
    },
    email:{
        type:String,
        required:[true, 'Email is mandatory and should be unique'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'Password is mandatory'],
    },

},
{timestamps: true}
)

//export
const userModel = mongoose.model('PFM', userSchema)
module.exports = userModel