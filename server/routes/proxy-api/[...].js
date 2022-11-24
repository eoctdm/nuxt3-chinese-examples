


import { sendProxy } from "h3";
export default defineEventHandler(async (event) => {
  const target = new URL(
    event.req.url.replace(/^\/proxy-api/, ""),
    'https://www.dvtop.cn',
  );
  return await sendProxy(event, target.toString());
});