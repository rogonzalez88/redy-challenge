import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Redy</Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
        </div>
      </div>
    </nav>
  )
}