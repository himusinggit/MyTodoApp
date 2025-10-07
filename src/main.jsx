import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Home,Login} from "./pages/index"
import Signup from './pages/Signup.jsx'
import Guest from './pages/Guest.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
        {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/guest',
        element:<Guest/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    
      <App />
    
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
