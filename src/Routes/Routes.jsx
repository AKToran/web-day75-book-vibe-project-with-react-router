import { createBrowserRouter } from 'react-router'
import App from '../App'
import Root from '../pages/Root/Root'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import ErrorPage2 from '../pages/ErrorPage/ErrorPage2'
import Home from '../Components/Home/Home'
import About from '../pages/About/About'
import BookDetails from '../Components/BookDetails/BookDetails'

export const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'/bookDetails/:id',
        loader: () => fetch('bookData.json'),
        Component: BookDetails
      },
      {
        path:'/about',
        Component: About,
      },
    ]
  },
  {
    path:'/app',
    Component: App,
  },
  {
    path:'*',
    Component: ErrorPage2
  },
])