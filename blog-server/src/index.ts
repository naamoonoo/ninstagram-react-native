import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

const mongoURI =
	"mongodb+srv://naamoonoo:gusdn223@cluster0-oexgi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`listening to http://localhost:${port}!`));
