export const selectBook = (song) => {
  return {
    type: 'BOOK_SELECTED',
    payload: song
  }
}
