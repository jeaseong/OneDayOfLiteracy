import { Schema, model } from "mongoose";

const TestSchema = new Schema(
  {
<<<<<<< HEAD
    question: { type: String, required: true, },
    content: { type: String, required: false, default: "", },
    choices: [{ type: String, required: true,}],
=======
    num: {type: Number, required: true, default: 0},
    question: { type: String, required: true, },
    questionType: { type: String, required: true, },
    content: { type: String, required: false, default: "", },
    choices: { type: String, required: true,},
>>>>>>> dev-back
    answer: { type: String, required: true, },
  },
  {
    timestamps: true,
  }
);

const TestModel = model("Test", TestSchema);

export { TestModel };
