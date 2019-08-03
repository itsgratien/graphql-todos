const {Index, Store, Show } = require('../controllers/Todo');

module.exports = {
  Query:{
      info: () => 'Hello world',
      Todos: Index,
      GetSingleTodo: Show
  },
  Mutation:{
      createTodos: Store
  }
}