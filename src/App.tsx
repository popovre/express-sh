import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CategoriesPage from "./pages/categories-page/component"
import ErrorPage from "./pages/error-page/component"
import Layout from "./layout/component"
import HomePage from "./pages/home/component"
import CategoryPage from "./pages/category-page/component"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "*",
            element: <CategoryPage />,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
