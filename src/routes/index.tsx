import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="App">
      <ConnectButton/>
    </div>
  )
}
