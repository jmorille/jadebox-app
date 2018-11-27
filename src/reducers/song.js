import {
    GET_SONGS,
    PLAY_SONG
} from '../actions/song.js';


const INITIAL_STATE = {
    songs: {},
    playing: {},
    error: ''
};


const song = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SONGS:
            return {
                ...state,
                songs: action.songs
            };
        case PLAY_SONG:
            return {
                ...state,
                playing: action.song
            };
        default:
            return state;
    }
};


export default song;
