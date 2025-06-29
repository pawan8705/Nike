import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import ProductList from './components/ProductList'
import Navbar2 from './components/Navbar2'
import SingleProduct from './components/SingleProduct'

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Home/><Footer/></>
  },
  {
    path:'/mens',
    element: <div className='dark:bg-[#00042b]'><Navbar2/><ProductList category="men"/><Footer/></div>
  },
  {
    path:'/womens',
    element: <div className='dark:bg-[#00042b]'><Navbar2/><ProductList category="women"/><Footer/></div>
  },
  {
    path:'/kids',
    element: <div className='dark:bg-[#00042b]'><Navbar2/><ProductList category="kid"/><Footer/></div>
  },
  {
    path:'/contact',
    element: <div className='dark:bg-[#00042b]'><Navbar2/><Contact/><Footer/></div>
  },
  {
    path: "/products/:productId",
    element: <div className='dark:bg-[#00042b]'><Navbar2/><SingleProduct/><Footer/></div>
  },
  {
    path:'/cart',
    element: <div className='dark:bg-[#00042b]'><Navbar2/><Cart/><Footer/></div>
  },

])

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
        mouseOptions={{
        backgroundColor: "white",
        zIndex: 10,
        followSpeed: 1.5,
      }}
      >
    <RouterProvider router={router}/>
    </UpdateFollower>
    </main>
  )
}

export default App
