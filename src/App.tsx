import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { dummyData } from './data/todos'
import TodoItem from './components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
      <main className="py-10 bg-red-50 h-screen space-y-5">
        <h1 className='font-bold text-3xl text-center'>Your todos</h1>
        <div className='max-w-lg mx-auto bg bg-slate-100 rounded-md p-5'>
          <div className='space-y-3'>
            {dummyData.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </div>
        </div>
      </main>
  )
}

export default App
