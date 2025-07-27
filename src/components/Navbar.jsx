import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Hireazy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About & How It Works
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/signin" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About & How It Works
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/signin" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

