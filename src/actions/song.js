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
      .then(data => receiveAllSongs(data) )
      .catch(err => failAllSongs(err));
};


export const failAllSongs = (err) => {
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
        songs: data.result
    };
};

export const playSong = () => {
    return {
        type: PLAY_SONG
    };
};