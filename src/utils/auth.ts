// Authentication utility functions
export interface User {
  id: string;
  email: string;
  companyName: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Local storage keys
const AUTH_STORAGE_KEY = 'hireazy_auth';
const USERS_STORAGE_KEY = 'hireazy_users';

// Get current auth state
export const getAuthState = (): AuthState => {
  try {
    const authData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authData) {
      const parsed = JSON.parse(authData);
      return {
        user: parsed.user,
        isAuthenticated: !!parsed.user
      };
    }
  } catch (error) {
    console.error('Error reading auth state:', error);
  }
  
  return {
    user: null,
    isAuthenticated: false
  };
};

// Save auth state
export const setAuthState = (user: User | null) => {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user }));
  } catch (error) {
    console.error('Error saving auth state:', error);
  }
};

// Get all users (for login validation)
export const getUsers = (): User[] => {
  try {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    return usersData ? JSON.parse(usersData) : [];
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
};

// Save user (for registration)
export const saveUser = (user: User) => {
  try {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving user:', error);
  }
};

// Check if email exists
export const emailExists = (email: string): boolean => {
  const users = getUsers();
  return users.some(user => user.email.toLowerCase() === email.toLowerCase());
};

// Validate login credentials
export const validateLogin = (email: string): User | null => {
  const users = getUsers();
  // For demo purposes, we'll accept any user with a matching email
  // In a real app, you'd hash and compare passwords
  const user = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  return user || null;
};

// Register new user
export const registerUser = (email: string, _password: string, companyName: string): User => {
  const user: User = {
    id: Date.now().toString(),
    email,
    companyName,
    createdAt: new Date().toISOString()
  };
  
  saveUser(user);
  return user;
};

// Logout
export const logout = () => {
  setAuthState(null);
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 6) {
    return { isValid: false, message: 'Password must be at least 6 characters long' };
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' };
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  
  return { isValid: true };
};