import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5000/user/register", (req, res, ctx) => {
    return res(ctx.json([{ result: "success" }]));
  }),

  rest.post("http://localhost:5000/user/login", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          token: "userToken",
          _id: "6232e9c20cb9033a0d6d156a",
          email: "test@test.com",
          name: "로그인유저",
          badge: ["http://imagePath"],
          level: 0,
          points: 0,
          errorMessage: null,
        },
      ])
    );
  }),
];
