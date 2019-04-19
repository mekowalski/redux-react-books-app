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
  - [] List of books
  - [] Currently selected books

- Action Creators: change the State in application
  - Dispatch an Action and tell selected book reducer to update data to reflect currently picked book
  - [] Select Book
