import { getLinkTag } from "@enhance/arc-plugin-styles/get-styles";
import TwitterMeta from "./templates/twitter-meta.mjs";

/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head(state) {
  const { store, status, req, error } = state;
  const { path } = req;
  const title = `My app — ${path}`;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${TwitterMeta(store)}
      <title>${title}</title>
      ${getLinkTag()}
      <link rel="icon" href="/_public/favicon.svg">
    </head>
  `;
}
