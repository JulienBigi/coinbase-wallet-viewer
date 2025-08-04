import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle-wrapper">
            <button 
                className="theme-toggle-switch"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                <div className={`switch-track ${theme === 'dark' ? 'dark' : ''}`}>
                    <div className="switch-thumb">
                        {theme === 'light' ? <FiSun /> : <FiMoon />}
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;