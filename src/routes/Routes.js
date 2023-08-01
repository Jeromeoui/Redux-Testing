import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../components/Home"
import PreReqs from "../components/PreReqs"
import Processes from "../components/Processes"
import FAQ from "../components/FAQ"
import NotFound from "../components/NotFound"

// const basename = '/uamweb/'
const basename = ''

export const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '', element: <Home/>},
      {path: 'prereqs', element: <PreReqs/>},
      {path: 'processes', element: <Processes/>},
      {path: 'faq', element: <FAQ/>},
      {path: '*', element: <NotFound/>},
    ],
  },
], { basename });