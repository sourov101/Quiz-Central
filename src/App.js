
import './App.css';
import Main from './components/Layouts/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Topics from './components/Topics/Topics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/topics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Topics></Topics>
      }

    ],

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
