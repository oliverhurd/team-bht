import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Auth
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ClerkProvider, SignIn, SignUp, useAuth } from "@clerk/clerk-react";

// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { ResultsPage } from './pages/ResultsPage';
import { NotesPage } from './pages/NotesPage';
import { AffiliatesPage } from './pages/AffiliatesPage';
import { ContributionPage } from './pages/ContributionPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';

// Vault Pages
import { VaultCourses } from './pages/vault/VaultCourses';
import { VaultCourseLessons } from './pages/vault/VaultCourseLessons';
import { VaultDashboard } from './components/VaultDashboard';
import { CourseView } from './components/CourseView';
import { LessonView } from './components/LessonView';

// Scroll to top on route change
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/contribute" element={<ContributionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Vault Routes */}
          <Route path="/vault" element={<ProtectedRoute>
                <VaultDashboard />
              </ProtectedRoute>} />
          <Route path="/vault/courses" element={<ProtectedRoute>
                <VaultCourses />
              </ProtectedRoute>} />
          <Route path="/vault/courses/:courseId" element={<ProtectedRoute>
                <CourseView />
              </ProtectedRoute>} />
          <Route path="/vault/lesson/:lessonId" element={<ProtectedRoute>
                <LessonView />
              </ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>;
}

export default App;