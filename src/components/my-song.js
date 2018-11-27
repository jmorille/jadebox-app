

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { getAllSongs, playSong } from '../actions/song.js';

// We are lazy loading its reducer.
import song from '../reducers/song.js';
store.addReducers({
  song
});

// These are the elements needed by this element.
import './song-products.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MySong extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h3>Chansons</h3>
        <audio controls autoplay id="player" preload="metadata" style=" width:600px;">
	       <source src="${this._playing.url}" type="audio/mpeg">
	       Your browser does not support the audio element.
        </audio>
        <song-products></song-products>
 

        <div>${this._error}</div> 
      </section>
    `;
  }

    constructor(){
        super();
        // Initialize property here.
        this._playing= "/data/noelEstCommeUnRythmeJazz.mp3";
    }

  static get properties() { return {
    // This is the data from the store.
    _playing: { type: Object },
    _error: { type: String }
  }}

  _playSong() {
    store.dispatch(playSong());
  }

  _playerPlay(that) {
      const player =  that.shadowRoot.querySelector("#player");
      if (player) {
        player.load();
//        player.play();
      }
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._playing = state.song.playing.url ? state.song.playing: { url: '' };
    this._playerPlay(this);
  }
}

window.customElements.define('my-song', MySong);
