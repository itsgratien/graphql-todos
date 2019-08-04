const {Index, Store, Show, Update, Destroy } = require('../controllers/Todo');

module.exports = {
  Query:{
      info: () => 'Hello world',
      Todos: Index,
      GetSingleTodo: Show
  },
  Mutation:{
      createTodos: Store,
      updateTodos: Update,
      deleteTodos: Destroy
  }
}