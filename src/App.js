import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';
import UserContext from './contexts/UserContext';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Addproduct from './components/AddProduct/Addproduct';
import ProductTable from './components/AllProduct/ProductTable';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';


const queryClient = new QueryClient()


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => fetch('http://localhost:5006/products'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/addproduct',
          element: <Addproduct></Addproduct>
        },
        {
          path: '/allproduct',
          element: <ProductTable></ProductTable>
        },
        {
          path: '/updateproduct/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: (props) => fetch(`https://ema-john-simple-server-module-59.vercel.app/allproducts/${props.params.id}`)
        }
      ]
    },

  ])
  return (
    <div>

      <QueryClientProvider client={queryClient}>

        <UserContext>
          <RouterProvider router={router}></RouterProvider>

        </UserContext>

      </QueryClientProvider>

    </div>
  );
}

export default App;
