import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/user/register", (req, res, ctx) => {
    return res(ctx.json([{ result: "success" }]));
  }),
];
