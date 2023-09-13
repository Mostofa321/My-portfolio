import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

// Initialize AOS with desired options
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  // once: true, // Whether animations should only happen once while scrolling down
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
