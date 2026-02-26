import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Auth
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Public Pages (no navbar)
import { HomePage } from './pages/HomePage';

// Public Pages (with navbar)
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

// Components
import { SiteNav } from './components/SiteNav';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout wrapper for pages WITH navbar
function LayoutWithNav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      {children}
      <Footer />
    </>
  );
}

export function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Landing page - NO navbar */}
          <Route path="/" element={<HomePage />} />

          {/* Public pages - WITH navbar */}
          <Route
            path="/about"
            element={
              <LayoutWithNav>
                <AboutPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/courses"
            element={
              <LayoutWithNav>
                <CoursesPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/results"
            element={
              <LayoutWithNav>
                <ResultsPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/notes"
            element={
              <LayoutWithNav>
                <NotesPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/affiliates"
            element={
              <LayoutWithNav>
                <AffiliatesPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/contribute"
            element={
              <LayoutWithNav>
                <ContributionPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutWithNav>
                <ContactPage />
              </LayoutWithNav>
            }
          />
          <Route
            path="/login"
            element={
              <LayoutWithNav>
                <LoginPage />
              </LayoutWithNav>
            }
          />

          {/* Protected Vault Routes */}
          <Route
            path="/vault"
            element={
              <ProtectedRoute>
                <LayoutWithNav>
                  <VaultCourses />
                </LayoutWithNav>
              </ProtectedRoute>
            }
          />
          <Route
            path="/vault/courses"
            element={
              <ProtectedRoute>
                <LayoutWithNav>
                  <VaultCourses />
                </LayoutWithNav>
              </ProtectedRoute>
            }
          />
          <Route
            path="/vault/courses/:courseId"
            element={
              <ProtectedRoute>
                <LayoutWithNav>
                  <VaultCourseLessons />
                </LayoutWithNav>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;