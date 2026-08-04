import Router from "./routing/Router"
import TaskPage from "@/pages/TaskPage/index.js"
import TasksPage from "@/pages/TasksPage/index.js"
import './styles'
const App = () => {
const routes={
  '/': TasksPage,
  '/tasks/:id':TaskPage,
  '*':()=><div>404 Page not found</div>

}

  return (
    <Router routes={routes}/>
  )
}

export default App
