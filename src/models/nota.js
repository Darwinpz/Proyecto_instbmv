const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const NoteSchema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true},
        user: { type: ObjectId , ref: "User", required: true}
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Note", NoteSchema);