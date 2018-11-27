

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
        <song-products></song-products>
 

        <div>${this._error}</div> 
      </section>
    `;
  }

  static get properties() { return {
    // This is the data from the store.
    _error: { type: String }
  }}

  _playSong() {
    store.dispatch(playSong());
  }


  // This is called every time something is updated in the store.
  stateChanged(state) {
  }
}

window.customElements.define('my-song', MySong);
