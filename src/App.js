
import './App.css';
import Main from './components/Layouts/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/home',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Home></Home>
      }

    ],

  },
  {
    path: '*',
    element: <div>Route Not Found. Code: 404</div>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
