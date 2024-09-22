import { dummyData } from './data/todos'
import TodoItem from './components/TodoItem'

function App() {
  
  function setTodoCompleted(id: number, completed: boolean) {
    alert(
      `Todo with id ${id} is now ${completed ? "completed" : "not completed"}`
    );
  }

  return (
    <div>
      <main className="py-10 bg-red-50 h-screen space-y-5">
        <h1 className='font-bold text-3xl text-center'>Your todos</h1>
        <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
          {dummyData.map((todo) => (
            <TodoItem 
              key={todo.id}
              todo={todo} 
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default App;