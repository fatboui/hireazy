import AnimatedSection from "../components/AnimatedSection";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { 
  Home, 
  Briefcase, 
  FileText, 
  Settings as SettingsIcon, 
  LogOut, 
  User,
  Bell,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const CompanyDashboard: React.FC = () => {
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

  const stats = [
    { name: 'Total Interviews', value: '24', change: '+12%', changeType: 'increase', icon: Calendar },
    { name: 'Upcoming Interviews', value: '8', change: '+3', changeType: 'increase', icon: Clock },
    { name: 'Pending Reports', value: '5', change: '-2', changeType: 'decrease', icon: FileText },
    { name: 'Success Rate', value: '87%', change: '+5%', changeType: 'increase', icon: TrendingUp },
  ];

  const recentInterviews = [
    {
      id: 1,
      candidate: 'John Smith',
      position: 'Investment Banking Analyst',
      interviewer: 'Sarah Johnson',
      date: '2025-01-15',
      status: 'completed',
      rating: 4.5
    },
    {
      id: 2,
      candidate: 'Emily Chen',
      position: 'Corporate Finance Associate',
      interviewer: 'Mike Rodriguez',
      date: '2025-01-14',
      status: 'completed',
      rating: 4.8
    },
    {
      id: 3,
      candidate: 'Alex Johnson',
      position: 'M&A Analyst',
      interviewer: 'Lisa Wang',
      date: '2025-01-16',
      status: 'scheduled',
      rating: null
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
              {/* Logout button at bottom-left */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign out
                </button>
              </div>
            </div>
          </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top bar */}
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white border-b border-gray-200">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open sidebar</span>
            <Home className="h-6 w-6" />
          </button>
        </div>

        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Welcome back, {user?.companyName}
                </h1>
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
                      {/* Removed logout button from profile menu */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Stats */}
              <AnimatedSection className="mb-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <item.icon className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {item.name}
                              </dt>
                              <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900">
                                  {item.value}
                                </div>
                                <div
                                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                                    item.changeType === 'increase'
                                      ? 'text-green-600'
                                      : 'text-red-600'
                                  }`}
                                >
                                  {item.change}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Recent Interviews */}
              <AnimatedSection className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    Recent Interviews
                  </h3>
                  <div className="space-y-4">
                    {recentInterviews.map((interview) => (
                      <div
                        key={interview.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">
                              {interview.candidate.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{interview.candidate}</p>
                            <p className="text-sm text-gray-500">{interview.position}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-900">Interviewer: {interview.interviewer}</p>
                          <p className="text-sm text-gray-500">{interview.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {interview.status === 'completed' ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-yellow-500" />
                          )}
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              interview.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {interview.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/my-jobs"
                      className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                    >
                      View all interviews →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompanyDashboard;