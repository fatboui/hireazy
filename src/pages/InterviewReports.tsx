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
  Search,
  Filter,
  Download,
  Eye,
  Star,
  Calendar,
  Clock
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedSection from '../components/AnimatedSection';

const InterviewReports: React.FC = () => {
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

  const reports = [
    {
      id: 1,
      candidate: 'John Smith',
      position: 'Investment Banking Analyst',
      interviewer: 'Sarah Johnson',
      date: '2025-01-15',
      duration: '60 min',
      status: 'completed',
      rating: 4.5,
      recommendation: 'Strong Hire',
      skills: ['Financial Modeling', 'Valuation', 'Communication'],
      reportUrl: '#'
    },
    {
      id: 2,
      candidate: 'Emily Chen',
      position: 'Corporate Finance Associate',
      interviewer: 'Mike Rodriguez',
      date: '2025-01-14',
      duration: '45 min',
      status: 'completed',
      rating: 4.8,
      recommendation: 'Strong Hire',
      skills: ['Excel Modeling', 'Financial Analysis', 'Presentation'],
      reportUrl: '#'
    },
    {
      id: 3,
      candidate: 'Alex Johnson',
      position: 'M&A Analyst',
      interviewer: 'Lisa Wang',
      date: '2025-01-13',
      duration: '50 min',
      status: 'completed',
      rating: 3.8,
      recommendation: 'Hire',
      skills: ['Due Diligence', 'Deal Structuring', 'Research'],
      reportUrl: '#'
    },
    {
      id: 4,
      candidate: 'Maria Garcia',
      position: 'FP&A Manager',
      interviewer: 'David Chen',
      date: '2025-01-12',
      duration: '55 min',
      status: 'completed',
      rating: 4.2,
      recommendation: 'Hire',
      skills: ['Budgeting', 'Forecasting', 'Leadership'],
      reportUrl: '#'
    },
    {
      id: 5,
      candidate: 'Robert Kim',
      position: 'Investment Banking Analyst',
      interviewer: 'Emma Thompson',
      date: '2025-01-16',
      duration: 'Pending',
      status: 'pending',
      rating: null,
      recommendation: 'Pending',
      skills: [],
      reportUrl: null
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation.toLowerCase()) {
      case 'strong hire':
        return 'bg-green-100 text-green-800';
      case 'hire':
        return 'bg-blue-100 text-blue-800';
      case 'no hire':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
                <h1 className="text-2xl font-semibold text-gray-900">Interview Reports</h1>
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

        {/* Reports content */}
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
                        placeholder="Search reports..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Export All</span>
                  </button>
                </div>
              </AnimatedSection>

              {/* Reports list */}
              <AnimatedSection className="space-y-4">
                {reports.map((report, index) => (
                  <div
                    key={report.id}
                    className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{report.candidate}</h3>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getRecommendationColor(report.recommendation)}`}
                          >
                            {report.recommendation}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Position: <span className="font-medium">{report.position}</span></p>
                            <p className="text-sm text-gray-600 mb-1">Interviewer: <span className="font-medium">{report.interviewer}</span></p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {report.date}
                            </p>
                            <p className="text-sm text-gray-600 mb-1 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {report.duration}
                            </p>
                          </div>
                        </div>

                        {report.rating && (
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-sm text-gray-600">Rating:</span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium ml-1">{report.rating}/5</span>
                            </div>
                          </div>
                        )}

                        {report.skills.length > 0 && (
                          <div className="mb-4">
                            <span className="text-sm text-gray-600 mb-2 block">Key Skills Assessed:</span>
                            <div className="flex flex-wrap gap-2">
                              {report.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {report.status === 'completed' ? (
                          <>
                            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>View</span>
                            </button>
                            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center space-x-1">
                              <Download className="h-4 w-4" />
                              <span>Download</span>
                            </button>
                          </>
                        ) : (
                          <span className="px-3 py-1 text-sm text-gray-500 bg-gray-100 rounded">
                            Report Pending
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </AnimatedSection>

              {/* Empty state if no reports */}
              {reports.length === 0 && (
                <AnimatedSection className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No reports available</h3>
                  <p className="mt-1 text-sm text-gray-500">Interview reports will appear here once interviews are completed.</p>
                </AnimatedSection>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InterviewReports;