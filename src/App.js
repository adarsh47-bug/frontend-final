// frontend/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ConnectPage from './pages/ConnectPage';
import EventsPage from './pages/EventsPage';
import CoursesPage from './pages/CoursesPage';
import JobsPage from './pages/JobsPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './context/authContext';
import Settings from './pages/Settings';
import './App.css';
import ViewProfilePage from './pages/ViewProfilePage';
import EventDetailsPage from './pages/EventDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import UniversityPage from './pages/UniversityPage';
import IntroPage from './pages/IntroPage';
import CareerAssistanceAI from './aimodels/CareerAssistanceAI';
import LearnWithMeAI from './aimodels/LearnWithMeAI';

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <ScrollToTop />
      <div className="pt-16">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event-details/:title" element={<EventDetailsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/profile/:userId" element={<ViewProfilePage />} />
          <Route path="/" element={<IntroPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />

          <Route path="/careerai" element={<CareerAssistanceAI />} />
          <Route path="/learnai" element={<LearnWithMeAI />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default App;
