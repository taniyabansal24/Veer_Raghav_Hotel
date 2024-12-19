import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import NotFound from './components/not-found';
import ProtectedRoute from './components/ProtectedRoute';

// contexts
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { RoomProvider } from './context/RoomContext';

// pages
import Home from './pages/home/home';
import Gallery from './pages/gallery/Gallery';
import RoomsPage from './pages/rooms/RoomPage';
import ViewRoomDetails from './pages/rooms/ViewRoomDetails';
import ContactPage from './pages/contact/ContactPage';

// Login and Register Layout
import AuthLayout from './pages/auth/AuthLayout';
import BookingPage from './pages/bookingpage/BookingPage';
import BookingSuccessPage from './pages/bookingpage/BookingSuccessPage';
import PaymentPage from './pages/bookingpage/PaymentPage';

// dashboard
import DashboardLayout from './pages/AdminDashboard/DashboardLayout';
import DashboardContent from './pages/AdminDashboard/pages/DashboardContent';
import BookingsContent from './pages/AdminDashboard/pages/BookingsContent';
import GuestsContent from './pages/AdminDashboard/pages/GuestsContent';
import PaymentsContent from './pages/AdminDashboard/pages/PaymentsContent';
import ReportsContent from './pages/AdminDashboard/pages/ReportsContent';
import SettingsContent from './pages/AdminDashboard/pages/SettingsContent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/gallery",
        element: (
          <Gallery />
        ),
      },
      {
        path: "/rooms",
        element: (
          <RoomsPage />
        ),
      },
      {
        path: "/rooms/:id",
        element: (
          <ViewRoomDetails />
        )
      },
      {
        path: "/booking/:id",
        element: (
          <BookingPage />
        )
      },
      {
        path: 'booking/success',
        element: <BookingSuccessPage />
      },
      {
        path: "/contact",
        element: (
          <ContactPage />
        )
      }
    ]
  },
  {
    path: 'payment',
    element: <PaymentPage />
  },
  {
    path: "/auth",
    element: (
      <AuthLayout />
    ),
    children: [
      {
        path: "login",
        element: (
          <h1>Login</h1>
        ),
      },
      {
        path: "register",
        element: (
          <h1>Register</h1>
        )
      }
    ]
  },

  {
    path: "/dashboard",
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        path: "",
        element: (
          <DashboardContent />
        )
      },
      {
        path: "bookings",
        element: (
          <BookingsContent />
        )
      },
      {
        path: "guests",
        element: (
          <GuestsContent />
        )
      },
      {
        path: "payments",
        element: (
          <PaymentsContent />
        )
      },
      {
        path: "reports",
        element: (
          <ReportsContent />
        )
      },
      {
        path: "settings",
        element: (
          <SettingsContent />
        )
      },
    ]
  },

  {
    path: "*",
    element: (
      <NotFound />
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BookingProvider>
        <RoomProvider>
          <RouterProvider router={router} />
        </RoomProvider>
      </BookingProvider>
    </AuthProvider>
  </StrictMode>,
)
