import { Schema, model } from "mongoose";

const ResultSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
<<<<<<< HEAD
    result: { type: Number, required: true, },
=======
    result: { type: Number, required: true, default: 0},
>>>>>>> dev-back
  },
  {
    timestamps: true,
  }
);

const ResultModel = model("Result", ResultSchema);

export { ResultModel };
