import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        pass: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: false,
            default: "user",
        }
    },
    { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;