import { Chart } from "../db";

class chartService {
  static async addChart({ chartName, chartData }) {
    const newChart = { chartName, chartData };
    const createdChart = await Chart.create({ newChart });
    return createdChart;
  }

  static async getCharts() {
    const charts = await Chart.findAll();
    return charts;
  }
}

export { chartService };
