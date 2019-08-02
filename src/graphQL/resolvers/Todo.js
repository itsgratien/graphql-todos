//model
const Todo = require('../../models/Todo');

const TodoResolvers = {
    Query: {
        info: () => 'Hello world',
        Todos: async() => {
            try {
                const find = await Todo.find({});
                return find
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        createTodos: async (parent,args) => {
            //business logic
            const newTodo = new Todo({
                name: args.name,
                description: args.description
            });
           try {
               const create = await newTodo.save();
               return create
           } catch (error) {
               return error
           }
        }
    }
}

module.exports = TodoResolvers;
