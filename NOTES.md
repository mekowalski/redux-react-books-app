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
    - `index.js`: sets up BOTH React and Redux sides of the app

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

- [x] create instance of Connect component
  - configure to reach Provider and tell it that it wants the list of books inside the application
  - defined in BookList
  - configure the connect() call

- [x] pull off books property and get it into the BookList component
  - BookList only cares about books, not selected books
  - map over the list of books(this.props.books)
  - return JSX to represent that book from the list

- NOTE: make use of `react-redux` library to get data from redux store, into a component
  1. Always import `connect` at the top
  2. Always call connect()() and pass in the Component as 2nd call
  3. Always define `mapStateToProps` which will always get an argument of `state`
  4. `mapStateToProps` will always return an object that will show up as props inside the component

- Going to use Semantic UI Grid system to add better styling/layout

- [x] Eventually wire of the Select button
- [x] Also create event handler for Select button
  - this will help show a detail of the book on the right side of the screen
  - update data/State of redux store anytime a book is selected
  - update data with redux, call an action creator
  - ANYTIME THE BUTTON IS CLICKED, THE REDUX STORE IS UPDATED!!!
  - `connect()` can be used to get action creators correctly in `BookList`
  - [x] import action creator and wire it to `connect`

- [x] BookDetail: show info on currently selected book
  - use `connect()`
  - wrap `BookDetail` with `connect()` component
  - define a `mapStateToProps` function to be notified by Provider about anytime the selected book changes
  - provider will tell connect() about every time user clicks Select button
  - `connect()` will take currently selected book and pass it as a prop to BookDetail component
  - BookDetail doesn't have functionality to update the `state` therefore no wired up action creators

- [] actually show details of selected book
  - destructure book property in order to keep code DRY and reference attributes
  - `TypeError: Cannot read property 'title' of null` refers to when the app first runs, there isn't a selected book and book state is set to `null` therefore the Uncaught TypeError
  - create conditional to fix error
