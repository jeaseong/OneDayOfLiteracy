import { Schema, model } from "mongoose";

const ChartSchema = new Schema(
  {
    chartName: { type: String, required: true },
    chartData: { type: Object, required: true },
  },
  {
    timestamps: true,
  }
);

const ChartModel = model("Chart", ChartSchema);

export { ChartModel };