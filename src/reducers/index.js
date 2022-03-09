import { combineReducers } from "redux";

const songsListReducer = () => {
  return [
      { title: 'Aadat', duration: '4:05'},
      { title: 'Hope', duration: '3:05'},
      { title: 'HYMN', duration: '4:00'},
      { title: 'Bubble', duration: '2:35'},
      { title: 'AOT Theme', duration: '3:33'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsListReducer,
    selectedSong: selectedSongReducer
});