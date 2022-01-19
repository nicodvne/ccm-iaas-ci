import express from "express";
import { getTest, postTest, addRoom, getRooms, getRoom, updateRoom, deleteRoom} from "../controllers/roomController.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

router.get('/', (_, res) => {
    res.send("Hello les bougs");
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/room', catchErrors(addRoom));

router.get('/rooms', catchErrors(getRooms));

router.get('/room/:id', catchErrors(getRoom));

router.patch('/room/:id', catchErrors(updateRoom));

router.delete('/room/:id', catchErrors(deleteRoom));

export default router;