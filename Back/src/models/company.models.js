import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String
    }
})

export default mongoose.model('Company', companySchema)