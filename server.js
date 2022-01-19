import express  from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import routes from "./routes/routes.js"

//Ajout de la possibilité d'utiliser des variables de config
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.set('trust proxy', true);

//config mongoose
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
})

app.use(routes);

app.listen(PORT, () => console.log(`server is running on ${PORT}`) );
