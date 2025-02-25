import mongoose, { Document, Schema } from "mongoose";


export interface UserDocument extends Document {
    name:string;
    email:string;
    uuid:string;
    avatar:string;
    createdAt:string;
    updatedAt:string;
}


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    uuid:{
        type: String,
    },
    avatar:{
        type: String,
        default: "/avatar.png"
    }
})

const UserModel = mongoose.model<UserDocument>("User",UserSchema);
export default UserModel;