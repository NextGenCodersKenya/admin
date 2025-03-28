<<<<<<< HEAD
import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth state when component mounts
    const storedUser = localStorage.getItem('admin');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "https://alvins.pythonanywhere.com/api/admin/login", 
        credentials
      );
      
      const userData = response.data.admin;
      setCurrentUser(userData);
      localStorage.setItem('admin', JSON.stringify(userData));
      
      // Use window.location to ensure complete refresh
      window.location.href = '/dashboard';
      
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('admin');
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      login, 
      logout,
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
=======
import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('admin');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error loading user from localStorage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "https://alvins.pythonanywhere.com/api/admin/login",
        credentials
      );

      if (response.data && response.data.admin) {
        const userData = response.data.admin;
        setCurrentUser(userData);
        localStorage.setItem('admin', JSON.stringify(userData));

        // Ensure complete refresh for session consistency
        window.location.href = '/dashboard';
      } else {
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('admin');
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loading }}>
      {!loading ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
>>>>>>> 6e8f7a9 (Initial commit in new location)
}