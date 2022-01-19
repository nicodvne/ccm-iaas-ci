import room from "../models/roomModels.js";
import roomModels from "../models/roomModels.js";

export const getTest = (_, res) => {
    res.send({
        name: 'Hardcoders'
    });
}

export const postTest = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}


// Create 
export const addRoom = async (req, res) => {
    const room = new roomModels(req.body);

    //Le try catch est fait avec la méthode errorCatch de helpers.js
    await room.save();
    res.send(room);
}

//Read all

export const getRooms = async (req, res) => {
    //https://thecodebarbarian.com/how-find-works-in-mongoose
    const rooms = await roomModels.find({});

    res.send(rooms);
}

//Read one 
export const getRoom = async (req, res) => {
    //https://thecodebarbarian.com/how-find-works-in-mongoose
    const rooms = await roomModels.find({_id: req.params.id });

    res.send(rooms);
}

//update one 
export const updateRoom = async (req, res) => {
    const room = await roomModels.findByIdAndUpdate(req.params.id, req.body);

    console.log(req.body);

    //equivalent au persist sur doctrine
    await room.save();
    res.send(room);
}

//delete one
export const deleteRoom = async (req, res) => {
    const room = await roomModels.findByIdAndDelete(req.params.id);
    
    if (!room) {
        res.status(404).send('Aucune chambre trouvée.');
    }

    res.status(200).send('Chambre suppprimée.');
}
