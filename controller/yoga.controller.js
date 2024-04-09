import Yoga from "../model/yoga.model.js"



export const addYoga = async (request, response, next) => {
    try {
        let result = await Yoga.create(request.body);
        return response.status(200).json({ message: "Yoga added", user: result });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const addInBulkYoga = (request,response,next)=>{
    Yoga.insertMany(request.body)
    .then(result=>{
        return response.status(200).json({message: "All product saved..."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    })
}

export const getAll = (request,response,next)=>{
    Yoga.find()
    .then(result=>{
        return response.status(200).json({Yogas: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}

export const updateYogaByName = async (request, response) => {
    try {
        const { name } = request.params; 
        const yogaData = request.body;

        const updatedYoga = await Yoga.findOneAndUpdate({ name: name }, yogaData, { new: true });

        if (!updatedYoga) {
            return response.status(404).json({ error: "Yoga not found" });
        }

        return response.status(200).json({ message: "Yoga updated", yoga: updatedYoga });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

export const removeYogaByName = async (request, response) => {
    try {
        const { name } = request.params; 

        const removedYoga = await Yoga.findOneAndDelete({ name: name });

        if (!removedYoga) {
            return response.status(404).json({ error: "Yoga not found" });
        }

        return response.status(200).json({ message: "Yoga removed", yoga: removedYoga });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

