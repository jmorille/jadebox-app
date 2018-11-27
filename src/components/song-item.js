import { LitElement, html } from '@polymer/lit-element';

// This element is *not* connected to the Redux store.
class SongItem extends LitElement {
  render() {
    return html`
      <img src="${this.img}" alt="${this.name}">
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      img: { type: String },
      url: { type: String }
    }
  }
}

window.customElements.define('song-item', SongItem);
