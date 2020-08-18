import React from 'react'
import { useQuery, useMutation, queryCache } from 'react-query'

function Todos() {
  // Queries
  const todosQuery = useQuery('todos', () => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: '测试'
          }
        ])
      }, 3000)
    }))
  })

  // Mutations
  const [addTodo] = useMutation(() => {
    return new Promise(((resolve, reject) => {
      resolve([
        {
          id: 1,
          title: '测试'
        },
        {
          id: Date.now(),
          title: 'Do Laundry',
        }
      ])
    }))
  }, {
    onSuccess: () => {
      // Query Invalidations
      queryCache.invalidateQueries('todos')
    },
  })
  console.log(queryCache)
  return (
    <div>
      <ul>
        {todosQuery.data ? todosQuery.data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        )) : null}
      </ul>

      <button
        onClick={() =>
          addTodo({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }
      >
        Add Todo
      </button>
    </div>
  )
}

export default Todos