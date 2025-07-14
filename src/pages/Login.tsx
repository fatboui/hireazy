import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { validateLogin, isValidEmail, emailExists } from '../utils/auth';
import LoadingSpinner from '../components/LoadingSpinner';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordSent, setForgotPasswordSent] = useState(false);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/dashboard';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = validateLogin(formData.email, formData.password);
      
      if (user) {
        login(user);
        navigate(from, { replace: true });
      } else {
        setErrors({ 
          email: 'Invalid email or password. Please try again or register for a new account.' 
        });
      }
    } catch (error) {
      setErrors({ 
        email: 'An error occurred during login. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!forgotPasswordEmail) {
      setErrors({ email: 'Please enter your email address' });
      return;
    }
    
    if (!isValidEmail(forgotPasswordEmail)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    
    if (!emailExists(forgotPasswordEmail)) {
      setErrors({ email: 'No account found with this email address' });
      return;
    }
    
    setForgotPasswordLoading(true);
    setErrors({});
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setForgotPasswordSent(true);
    } catch (error) {
      setErrors({ email: 'Failed to send reset email. Please try again.' });
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  const resetForgotPassword = () => {
    setForgotPasswordMode(false);
    setForgotPasswordEmail('');
    setForgotPasswordSent(false);
    setForgotPasswordLoading(false);
    setErrors({});
  };

  const handleLinkedInLogin = () => {
    // Placeholder for LinkedIn OAuth integration
    alert('LinkedIn login will be implemented with OAuth integration');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        {!forgotPasswordMode ? (
          <>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4 hover-scale transition-transform duration-300">
                <img 
                  src="/IMG_3073.PNG" 
                  alt="Hireazy" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 animate-slide-up">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-gray-600 animate-slide-up animate-stagger-1">
                Sign in to your company account
              </p>
            </div>

            <form className="mt-8 space-y-6 animate-slide-up animate-stagger-2" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`appearance-none relative block w-full px-3 py-2 pl-10 border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 focus-ring`}
                      placeholder="Enter your email"
                    />
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 animate-slide-up">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      className={`appearance-none relative block w-full px-3 py-2 pl-10 pr-10 border ${
                        errors.password ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 focus-ring`}
                      placeholder="Enter your password"
                    />
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <button
                      type="button"
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover-scale"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600 animate-slide-up">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all duration-300"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button
                    type="button"
                    onClick={() => setForgotPasswordMode(true)}
                    className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-lift btn-primary"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <LoadingSpinner size="sm" color="white" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    'Sign in'
                  )}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLinkedInLogin}
                  className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 hover-lift"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#0077B5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Continue with LinkedIn
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </>
        ) : (
          <>
            {/* Forgot Password Form */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4 hover-scale transition-transform duration-300">
                <img 
                  src="/IMG_3073.PNG" 
                  alt="Hireazy" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
              {!forgotPasswordSent ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 animate-slide-up">
                    Reset Password
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 animate-slide-up animate-stagger-1">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 animate-slide-up">
                    Check Your Email
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 animate-slide-up animate-stagger-1">
                    We've sent password reset instructions to <strong>{forgotPasswordEmail}</strong>
                  </p>
                </>
              )}
            </div>

            {!forgotPasswordSent ? (
              <form className="mt-8 space-y-6 animate-slide-up animate-stagger-2" onSubmit={handleForgotPasswordSubmit}>
                <div>
                  <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="forgotEmail"
                      name="forgotEmail"
                      type="email"
                      value={forgotPasswordEmail}
                      onChange={(e) => {
                        setForgotPasswordEmail(e.target.value);
                        if (errors.email) {
                          setErrors(prev => ({ ...prev, email: '' }));
                        }
                      }}
                      className={`appearance-none relative block w-full px-3 py-2 pl-10 border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300 focus-ring`}
                      placeholder="Enter your email address"
                    />
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 animate-slide-up">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={forgotPasswordLoading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-lift btn-primary"
                  >
                    {forgotPasswordLoading ? (
                      <div className="flex items-center space-x-2">
                        <LoadingSpinner size="sm" color="white" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={resetForgotPassword}
                    className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 hover-lift"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Sign In
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-8 space-y-6 animate-slide-up animate-stagger-2">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-sm text-green-800">
                    <p className="mb-2">
                      <strong>What's next?</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Check your email inbox (and spam folder)</li>
                      <li>Click the reset link in the email</li>
                      <li>Create a new password</li>
                      <li>Sign in with your new password</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => {
                      setForgotPasswordSent(false);
                      setForgotPasswordEmail('');
                    }}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 hover-lift"
                  >
                    Resend Email
                  </button>

                  <button
                    type="button"
                    onClick={resetForgotPassword}
                    className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Sign In
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;