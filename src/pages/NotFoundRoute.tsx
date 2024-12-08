import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundRoute = () => {
  return (
    <div className="container mx-auto p-5 text-center">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <span className="text-8xl font-bold text-slate-300 my-12 block">404</span>
      <p>Something has gone terribly wrong...</p>
      <p className="mb-12">Let's get you back home?</p>
      <Link to="/" className="text-blue-500 hover:underline">
        <FaHome className="inline-block" /> Home
      </Link>
    </div>
  )
}

export default NotFoundRoute
