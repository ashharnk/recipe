const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json()); 


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" MongoDB Connected");
    } catch (error) {
        console.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1);
    }
};
connectDB();


const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: [String],
    instructions: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);


app.get("/recipes", async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

app.post("/recipes", async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ title, ingredients, instructions });
    await newRecipe.save();
    res.status(201).json(newRecipe);
});

app.put("/recipes/:id", async (req, res) => {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
});

app.delete("/recipes/:id", async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
