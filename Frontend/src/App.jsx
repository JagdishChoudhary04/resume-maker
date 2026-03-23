import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"

function App() {

  return (  
    <main>
      <RouterProvider router = {router} />

    </main>
  )
}

export default App
