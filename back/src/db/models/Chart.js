import { ChartModel } from "../schemas/chart";

class Chart {
  static async create({ newChart }) {
    const chart = await ChartModel.create( newChart );
    return chart;
  }

  static async findAll() {
    const charts = await ChartModel.find({});
    return charts;
  }
}

export { Chart };