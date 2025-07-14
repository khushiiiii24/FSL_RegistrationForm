import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from './Pages/First';
import Form from './Pages/Form';

const router = createBrowserRouter([{
    path:"/",
    element:<First/>,
    children:[
        {
            index:true,
            element:<Form/>
        }
    ]
}]);
function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App