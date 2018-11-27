import ReduxThunk from 'redux-thunk';

//import fetch from 'node-fetch';



export const GET_SONGS = 'GET_SONGS';
export const REQUEST_SONGS = 'REQUEST_SONGS';
export const ERROR_SONGS = 'ERROR_SONGS';

export const PLAY_SONG = 'PLAY_SONG';

export const getAllSongs = () => (dispatch) => {
  dispatch(requestAllSongs());
  return fetch('/data/songs.json')
      .then(res => res.json() )
      .then(reformatDataResponseSongs)
      .then(data => dispatch(receiveAllSongs(data)) )
      .catch(failAllSongs);
};

const reformatDataResponseSongs = (data) => {
    const songs = data.result.reduce((obj, product) => {
        obj[product.id] = product
        return obj
    }, {});
    return songs;
};

export const failAllSongs = (err) => {
    console.error("Error", err);
    return {
        type: ERROR_SONGS,
        error: err
    };
};

export const requestAllSongs = () => {
    return {
        type: REQUEST_SONGS
    };
};
export const receiveAllSongs = (data) => {
    return {
        type: GET_SONGS,
        songs: data
    };
};

export const playSong = (song) => {
    return {
        type: PLAY_SONG,
        song: song
    };
};