import './App.css'
import { useRoutes } from './hooks/routes'

function App() {
    const routes = useRoutes()
    return <div className="App">{routes}</div>
}

export default App
