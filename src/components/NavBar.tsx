import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Rome Colmenares</h1>
        <ul className="flex space-x-8">
          <li>
            <Link to="/home" className="hover:text-blue-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-300 transition">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-300 transition">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}