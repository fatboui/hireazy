import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, getAuthState, setAuthState } from '../utils/auth';

interface AuthContextType extends AuthState {
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthStateLocal] = useState<AuthState>(() => getAuthState());

  useEffect(() => {
    // Check for auth state changes on mount
    const currentState = getAuthState();
    setAuthStateLocal(currentState);
  }, []);

  const login = (user: User) => {
    const newState = { user, isAuthenticated: true };
    setAuthStateLocal(newState);
    setAuthState(user);
  };

  const logout = () => {
    const newState = { user: null, isAuthenticated: false };
    setAuthStateLocal(newState);
    setAuthState(null);
  };

  const updateUser = (user: User) => {
    const newState = { user, isAuthenticated: true };
    setAuthStateLocal(newState);
    setAuthState(user);
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};