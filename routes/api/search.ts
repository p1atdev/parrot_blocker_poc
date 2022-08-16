import { HandlerContext } from "$fresh/server.ts";

export const handler = (
  _req: Request,
  _ctx: HandlerContext,
): Response => {
  const res = new Response("hi");

  return res;
};
