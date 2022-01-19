import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    maxPersons: {
        type: Number,
        default: 1,
        validate: value => {
            if (value <= 0) {
                throw new Error('La chambre doit pouvoir accueillir au moins une personne')
            }
        }
    }
})


const room = mongoose.model('Room', roomSchema);

export default room;