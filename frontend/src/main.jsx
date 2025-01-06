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
import { AdminProvider } from './context/AdminContext';
import { Toaster } from './components/ui/toaster';
import { SettingsProvider } from './context/SettingsContext';

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
import ResetPasswordRequest from './pages/auth/components/ResetPasswordRequest';
import ResetPassword from './pages/auth/components/ResetPassword';

// dashboard
import DashboardLayout from './pages/AdminDashboard/DashboardLayout';
import DashboardContent from './pages/AdminDashboard/pages/DashboardContent';
import BookingsContent from './pages/AdminDashboard/pages/BookingsContent';
import GuestsContent from './pages/AdminDashboard/pages/GuestsContent';
import PaymentsContent from './pages/AdminDashboard/pages/PaymentsContent';
import ReportsContent from './pages/AdminDashboard/pages/ReportsContent';
import SettingsContent from './pages/AdminDashboard/pages/SettingsContent';
import CustomizeRooms from './pages/AdminDashboard/pages/CustomizeRooms';
import RoomsForm from './pages/AdminDashboard/pages/RoomsForm';
import UserContent from './pages/AdminDashboard/pages/UserContent';


//user profile
import UserProdfileLayout from './pages/UserProfile/UserProdfileLayout';
import UserBookings from './pages/UserProfile/components/UserBookings';
import UserProfile from './pages/UserProfile/components/UserProfile';
import UserSettings from './pages/UserProfile/components/UserSettings';
import PaymentPage from './pages/bookingpage/PaymentPage';



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
        path: "/booking/:roomId",
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
      },
      {
        path: "/profile",
        element: (
          // <ProtectedUserProfile>
            <UserProdfileLayout />
          // </ProtectedUserProfile>
        ),
        children: [
          {
            path: "",
            element: (
              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl">
                <div className="lg:col-span-2">
                  <UserProfile />
                </div>
                <div className='lg:col-span-1'>
                  <UserSettings />
                </div>
              </div>
            )
          },
          {
            path: "bookings",
            element: (
              <UserBookings />
            )
          }
        ]
      },
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
    path: "/forgot-password",
    element: (
      <ResetPasswordRequest />
    )
  },

  {
    path: "/reset-password/:token",
    element: (
      <ResetPassword />
    )
  },

  // User profile section
  // {
  //   path: "/profile/bookings",
  //   element: (
  //     <UserBookings />
  //   ),
  // },

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
        path: "users",
        element: (
          <UserContent />
        )
      },
      {
        path: "rooms",
        element: (
          <CustomizeRooms />
        )
      },
      {
        path: "rooms/new",
        element: (
          <RoomsForm />
        )
      },
      {
        path: "rooms/:id",
        element: (
          <RoomsForm />
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
          <AdminProvider>
            <SettingsProvider>
              <RouterProvider router={router} />
              <Toaster />
            </SettingsProvider>
          </AdminProvider>
        </RoomProvider>
      </BookingProvider>
    </AuthProvider>
  </StrictMode>,
)
