import { Schema, model } from "mongoose";

const ResultSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    result: { type: Number, required: true, },
  },
  {
    timestamps: true,
  }
);

const ResultModel = model("Result", ResultSchema);

export { ResultModel };
