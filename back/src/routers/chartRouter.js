import { Router } from "express";
import { chartService } from "../services/chartService";

const chartRouter = Router();

chartRouter.post("/charts", async (req, res, next) => {
  try {
    const { chartName, chartData } = req.body;
    const createdChart = await chartService.addChart({ chartName, chartData });
    res.status(201).json(createdChart);
  } catch(err) {
    next(err);
  }
})

chartRouter.get("/charts", async (req, res, next) => {
  try {
    const charts = await chartService.getCharts();
    res.status(200).json(charts);
  } catch(err) {
      next(err);
  }
})

export { chartRouter };