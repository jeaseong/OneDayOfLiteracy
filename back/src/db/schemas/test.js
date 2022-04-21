import { Schema, model } from "mongoose";

const TestSchema = new Schema(
  {
    question: { type: String, required: true, },
    choices: [{ type: String, required: true,}],
    answer: { type: String, required: true, },
  },
  {
    timestamps: true,
  }
);

const TestModel = model("Test", TestSchema);

export { TestModel };
