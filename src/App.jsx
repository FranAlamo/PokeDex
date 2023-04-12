import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Layouts/Home/Home.jsx'
import Details from './Layouts/Details/Details.jsx'
import RootLayout from './Layouts/RootLayout'
function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path=':id' element={<Details
        />} />


      </Route>
    )

  )


  return (
    <RouterProvider router={router}>
      <div className="App">

      </div>
    </RouterProvider>
  )
}

export default App
