import mongoose from "mongoose";

const yogaSchema = new mongoose.Schema({
    yogaName: {
        type: String,
        required: true,
        unique:true

    },
    benefits: {
        type: String,
    },
    instructions: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    categoryId: {
        type: String,
        
    }
}, { versionKey: false });

const Yoga = mongoose.model("Yoga", yogaSchema);

export default Yoga;
