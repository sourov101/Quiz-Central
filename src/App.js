
import './App.css';
import Main from './components/Layouts/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';

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
      },
      {
        path: '/home/:id',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
        },
        element: <Quizes> </Quizes>
      },
      {
        path: '/statistics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Statistic></Statistic>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
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
