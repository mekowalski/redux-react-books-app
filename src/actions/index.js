//action creators
export const selectBook = (song) => {
  //return an action, with type and optional payload
  return {
    type: 'BOOK_SELECTED',
    payload: song
  }
}
