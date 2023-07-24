import Practice from './components/Practice'
import TodoApp from './components/TodoApp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Practice />
        <TodoApp />
    </main>
  )
}
