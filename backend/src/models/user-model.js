import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    token:{
        type: String
    }
}, { timestamps: true})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt)
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    },
    process.env.TOKEN_SECRET,
    {
        expiresIn: process.env.TOKEN_EXPIRY
    }
    )
}

export const User = mongoose.model("user", userSchema);