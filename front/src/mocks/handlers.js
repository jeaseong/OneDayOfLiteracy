import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5001/user/register", (req, res, ctx) => {
    return res(ctx.json([{ result: "success" }]));
  }),

  rest.post("http://localhost:5001/user/login", (req, res, ctx) => {
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

  rest.get("http://localhost:5001/user/current", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: "userToken",
        _id: "6232e9c20cb9033a0d6d156a",
        email: "test@test.com",
        nickname: "테스트유저",
        badge: ["http://imagePath"],
        level: 0,
        points: 0,
        errorMessage: null,
      })
    );
  }),
];
