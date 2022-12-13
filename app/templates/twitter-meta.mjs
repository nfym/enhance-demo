export default function TwitterMeta(state) {
  const { title, description, image, card } = state;
  return `
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    <meta name="twitter:card" content="${card}">
  `;
}
