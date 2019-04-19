# App Challenges/Structure
- React side:
  1. BookList: Renders an array of objects(array of books), Title/Author
  2. BookDetail: Renders details of specific book object, Title/Author/Genre/PublishedDate etc

- React-Redux
  1. [x] Install Redux
  2. [x] Install React-Redux
  - make sure React & Redux work together
  - this app will help understand HOW react-redux works

- [x] Create boilerplate of `index.js` with:
  - import statements, component structure and `.render()`
- [x] Create App component and import
- [x] Hook up Semantic UI(of course)(woot woot)

- App component is a functional component because it will no longer handle State, THIS IS WHAT REDUX IS FOR
- Component-level State are used less with a few exceptions


## Redux Design
- Reducers: the 2 pieces of State in application
  - Static, unchanging list of books in Reducer(technically overkill)
  - [] List of books
  - [] Currently selected books

- Action Creators: change the State in application
  - Dispatch an Action and tell selected book reducer to update data to reflect currently picked book
  - [] Select Book

- Need to get State to be called in BookList

- Project Structure for Redux
  - `/src`: all code will be in the src folder
    - `/actions`: all files related to action creators
    - `/components`: all files related to components
    - `/reducers`: all files related to reducers
    - `index.js`: sets up BOTh React and Redux sides of the app

- [x] Create Actions DIR
  - [x] house `selectBook` action creator
- [x] Create Reducers DIR
  - [x] book list: return static list of books
  - [x] selected book: allow user to select specific book

- [x] Wire up reducers with `combineReducers`

- [x] Eventually wire up Provider
  - configure provider tag at the top of component hierarchy and pass a reference of redux store
  - create provider instance and wrap App component with it
  - Any component inside component hierarchy can make use of `connect` to communicate with `provider` which communicates with all data in store

## React Side
- [x] BookList component: hook up to App component

- [] create instance of Connect component
  - configure to reach Provider and tell it that it wants the list of books inside the application
  - defined in BookList
  - configure the connect() call
