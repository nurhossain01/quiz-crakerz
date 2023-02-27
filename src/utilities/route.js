import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import Topic from "../Component/Topic";
import Quiz from "../Component/Quiz"


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    // loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/topics',
        loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topic></Topic>
      },
      {
        path: '/quizes/:quizId',
        loader: async({params})=>{
          // console.log(params.quizId);
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element:<Quiz></Quiz>
      }
      

    ]
  },
]) ;