
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import "./i18n/index.ts";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./components/route-protection/ProtectedRoute.tsx";
import AnonymosRoute from "./components/route-protection/AnonymosRoute.tsx";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <AnonymosRoute><Login /></AnonymosRoute> },
  { path: "/register", element: <AnonymosRoute><Register /></AnonymosRoute> },
  { path: "/dashboard", element: <ProtectedRoute><h1>Dashboard</h1></ProtectedRoute> },


]

);
function App() {

  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>


  )
}

export default App
