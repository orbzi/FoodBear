const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodbear:food123@cluster0.kxe8ha4.mongodb.net/foodbearmern?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log("---", err);
        }
        else {
            console.log("connected!");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) {
                    console.log("---", err);
                }
                else {
                    console.log();
                }
            })
        }
    });
}

module.exports = mongoDB;