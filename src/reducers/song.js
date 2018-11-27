import {
    GET_SONGS,
    PLAY_SONG
} from '../actions/song.js';
import {ADD_TO_CART, CHECKOUT_FAILURE, CHECKOUT_SUCCESS, GET_PRODUCTS, REMOVE_FROM_CART} from "../actions/shop";


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
                ...state
            };
        default:
            return state;
    }
};
