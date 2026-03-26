import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"

function App() {

  return (  
    <main>
      <AuthProvider>
        <RouterProvider router = {router} />
      </AuthProvider>

    </main>
  )
}

export default App
