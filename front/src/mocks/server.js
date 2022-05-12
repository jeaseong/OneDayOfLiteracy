import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";

// mocking 서버 생성
export const server = setupServer(...handlers);
