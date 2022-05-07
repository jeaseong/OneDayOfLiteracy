import { Schema, model } from "mongoose";

const SubjectSchema = new Schema(
  {
    subject: { type: String, required: true, },
    level: { type: Number, required: true, index: true, },
<<<<<<< HEAD
    category: { type: String, required: true, },
=======
    category: { type: String, required: false, default: "" },
>>>>>>> dev-back
    point: { type: Number, required: true,},
  },
  {
    timestamps: true,
  }
);

const SubjectModel = model("Subject", SubjectSchema);

export { SubjectModel };
