import Footer from "./Footer";
import Header from "./Header";
import PageTransition from "./PageTransition";
import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  useAuth();
  const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
                          location.pathname === '/my-jobs' || 
                          location.pathname === '/interview-reports' || 
                          location.pathname === '/settings';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isDashboardRoute && <Header />}
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

export default Layout;