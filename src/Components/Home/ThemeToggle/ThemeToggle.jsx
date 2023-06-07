import React, { useState } from 'react';
import { BeakerIcon,MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can also save the user's preference in local storage or a state management solution
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="fixed right-4 bottom-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {isDarkMode ? <BeakerIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-500" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
