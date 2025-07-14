import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  FileText, 
  Settings as SettingsIcon, 
  LogOut, 
  User,
  Bell,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedSection from '../components/AnimatedSection';

const MyJobs: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const sidebarItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, current: location.pathname === '/dashboard' },
    { name: 'My Jobs', href: '/my-jobs', icon: Briefcase, current: location.pathname === '/my-jobs' },
    { name: 'Interview Reports', href: '/interview-reports', icon: FileText, current: location.pathname === '/interview-reports' },
    { name: 'Settings', href: '/settings', icon: SettingsIcon, current: location.pathname === '/settings' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Investment Banking Analyst',
      department: 'Investment Banking',
      status: 'active',
      applicants: 12,
      interviews: 8,
      created: '2025-01-10',
      deadline: '2025-01-25'
    },
    {
      id: 2,
      title: 'Corporate Finance Associate',
      department: 'Corporate Finance',
      status: 'active',
      applicants: 18,
      interviews: 5,
      created: '2025-01-08',
      deadline: '2025-01-22'
    },
    {
      id: 3,
      title: 'M&A Analyst',
      department: 'Mergers & Acquisitions',
      status: 'completed',
      applicants: 24,
      interviews: 12,
      created: '2024-12-15',
      deadline: '2025-01-05'
    },
    {
      id: 4,
      title: 'FP&A Manager',
      department: 'Financial Planning',
      status: 'draft',
      applicants: 0,
      interviews: 0,
      created: '2025-01-12',
      deadline: '2025-01-30'
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          {/* Logo */}
          <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/IMG_3073.PNG" 
                alt="Hireazy" 
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  <item.icon
                    className={`${
                      item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    } mr-3 flex-shrink-0 h-5 w-5`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-gray-900">My Jobs</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">3</span>
                  </span>
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user?.companyName}</span>
                  </button>
                  
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="inline h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs content */}
        <main className="flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Actions bar */}
              <AnimatedSection className="mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search jobs..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Create Job</span>
                  </button>
                </div>
              </AnimatedSection>

              {/* Jobs list */}
              <AnimatedSection className="space-y-4">
                {jobs.map((job, index) => (
                  <div
                    key={job.id}
                    className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              job.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : job.status === 'completed'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {job.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{job.department}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Applicants:</span>
                            <span className="ml-1 font-medium">{job.applicants}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Interviews:</span>
                            <span className="ml-1 font-medium">{job.interviews}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Created:</span>
                            <span className="ml-1 font-medium">{job.created}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Deadline:</span>
                            <span className="ml-1 font-medium">{job.deadline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700">
                          View Details
                        </button>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                          Schedule Interview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>

              {/* Empty state if no jobs */}
              {jobs.length === 0 && (
                <AnimatedSection className="text-center py-12">
                  <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No jobs</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating a new job posting.</p>
                  <div className="mt-6">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      <Plus className="-ml-1 mr-2 h-5 w-5" />
                      Create Job
                    </button>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyJobs;