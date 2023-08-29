import mongoose from "mongoose";

const sliderHomeSchema = new mongoose.Schema({
    image: {
        url: String,
        public_id: String
    }
})

export default mongoose.model('SliderHome', sliderHomeSchema)