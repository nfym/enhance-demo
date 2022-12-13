/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */

export default function BasicLayout({ html, state }) {
  const { attrs } = state;
  const headTitle = attrs?.headtitle || "Default System Title";

  return html`
    <div class="basic-layout">
      <header class="header-wrap">
        <main class="header-content">
          ${headTitle}
          <slot name="headNav"></slot>
        </main>
      </header>

      <main>
        <slot name="main"></slot>
      </main>

      <slot name="footer"></slot>
    </div>

    <style>
      .basic-layout {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background-color: #fff;
      }

      .header-wrap {
        width: 100%;
        min-width: 12rem;
        margin: 0;
        padding: 0;
        position: sticky;
        top: 0;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        z-index: 100;
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        max-width: 75rem;
        min-height: 4rem;
        overflow: hidden;
        margin: auto;
        padding: 0 2rem;
      }

      ::slotted([slot="footer"]) {
        background: #f3f3f3;
      }
    </style>
  `;
}
