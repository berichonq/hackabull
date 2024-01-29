import './App.css'
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  useEffect(() => {
    AOS.init({
      // // Your settings
      // startEvent: 'load' // This line replaces the need for the additional event listener
      duration: 1000,
      offset: -400,
      once: true,
      delay: 0,
      mirror: true,
    });

    // Optional: If you still want to use the window event listener
    window.addEventListener('load', AOS.refresh);
  }, []);


  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
