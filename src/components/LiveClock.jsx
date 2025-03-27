import { useEffect, useState } from 'react';
import './LiveClock.css';

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());
    const [colorScheme, setColorScheme] = useState({
      primary: '#00eaff',
      secondary: '#00b3cc'
    });
  
    // Update time every second
    useEffect(() => {
      const timeInterval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(timeInterval);
    }, []);
  
    // Change colors every 5 seconds
    useEffect(() => {
      const colorInterval = setInterval(() => {
        const hue = Math.floor(Math.random() * 360);
        setColorScheme({
          primary: `hsl(${hue}, 100%, 50%)`,
          secondary: `hsl(${(hue + 30) % 360}, 100%, 50%)`
        });
      }, 5000);
      return () => clearInterval(colorInterval);
    }, []);
  
    // Format time (HH:MM:SS)
    const formatTime = () => {
      return time.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    };
  
    // Format date (DD-MM-YYYY)
    const formatDate = () => {
      const day = time.getDate().toString().padStart(2, '0');
      const month = (time.getMonth() + 1).toString().padStart(2, '0');
      const year = time.getFullYear();
      return `${day}-${month}-${year}`;
    };
  
    return (
      <div className="clock" style={{
        '--primary-color': colorScheme.primary,
        '--secondary-color': colorScheme.secondary
      }}>
        <div className="date">{formatDate()}</div>
        <div className="linkedin">
          <a 
            href="https://www.linkedin.com/in/rakibur-rimon/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Rakibur Rahman
          </a>
        </div>
        <div className="digital-clock">{formatTime()}</div>
      </div>
    );
  }