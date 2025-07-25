import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Hireazy</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Streamline your technical hiring process with quality, efficiency, and equity at every step. 
              We make it easy to hire great engineers.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@hireazy.co.uk" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About & How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/signin" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <Mail size={16} className="inline mr-2" />
                info@hireazy.co.uk
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Hireazy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

