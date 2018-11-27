import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the elements needed by this element.
import './song-item.js';

// These are the actions needed by this element.
import { getAllSongs, playSong } from '../actions/song.js';

// These are the elements needed by this element.
import { addToCartIcon } from './my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';

class SongProducts extends connect(store)(LitElement) {
  render() {
    return html`
      ${ButtonSharedStyles}
      <style>
        :host { display: block; }
      </style>
      ${Object.keys(this._products).map((key) => {
        const item = this._products[key];
        return html`
          <div>
            <song-item name="${item.name}" url="${item.url}" 
                       img="${item.img}"
                       data-index="${item.id}"
                       @click="${this._playButtonClicked}">                       
            </song-item> 
          </div>
        `
      })}
    `;
  }

  static get properties() { return {
    _products: { type: Object }
  }}

  firstUpdated() {
    store.dispatch(getAllSongs());
  }

  _playButtonClicked(e) {
    const songId = e.currentTarget.dataset['index'];
    store.dispatch(playSong(this._products[songId]));
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._products = state.song.songs;
  }
}

window.customElements.define('song-products', SongProducts);
