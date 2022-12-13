/** @type {import('@enhance/types').EnhanceApiFn} */

export async function get(req) {
  console.log("🚀 ~ file: about.mjs:4 ~ get ~ req", req);
  return {
    json: {
      message: "欢迎来到 about 页面!",
      data: {
        date: "2022/12/13",
      },
    },
  };
}
