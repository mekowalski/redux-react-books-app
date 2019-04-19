//action creators
export const selectBook = (song) => {
  //return an action, with type and optional payload
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
