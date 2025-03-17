import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserPage from "./pages/user-page/component"
import ErrorPage from "./pages/error-page/component"
import Layout from "./layout/component"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "user",
        index: true,
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
