
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import "./i18n/index.ts";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./components/route-protection/ProtectedRoute.tsx";
import AnonymosRoute from "./components/route-protection/AnonymosRoute.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <AnonymosRoute><Login /></AnonymosRoute> },
  { path: "/register", element: <AnonymosRoute><Register /></AnonymosRoute> },
  { path: "/reset-password", element: <AnonymosRoute><ResetPassword /></AnonymosRoute> },
  {
    path: "/dashboard", children: [
      { index: true, element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
    ]
  },


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
