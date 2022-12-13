export default function MyAbout({ html, state }) {
  console.log("🚀 ~ file: my-about.mjs:2 ~ MyAbout ~ state", state);
  const { store } = state;
  const { message = "", data = { date: "" } } = store;

  return html` <p class="my-message">${message} ${data.date}</p> `;
}
