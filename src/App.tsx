import About from "./pages/About";
import CompanyDashboard from "./pages/CompanyDashboard";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import InterviewReports from "./pages/InterviewReports";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import MyJobs from "./pages/MyJobs";
import ProtectedRoute from "./components/ProtectedRoute";
import React, { Suspense, lazy } from "react";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const JobDetailsPage = lazy(() => import("./pages/JobDetailsPage"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <CompanyDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-jobs"
              element={
                <ProtectedRoute>
                  <MyJobs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/interview-reports"
              element={
                <ProtectedRoute>
                  <InterviewReports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route
              path="/job-details/:id"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<div>Loading...</div>}>
                    <JobDetailsPage />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
