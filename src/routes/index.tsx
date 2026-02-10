import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="App">
      <Button>Кнопка</Button>
    </div>
  )
}
