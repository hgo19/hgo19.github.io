import React, { useContext, useEffect, useState } from 'react'
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md';
import PortifolioContext from '../../context/PortifolioContext';

import ButtonStyled from './styles';

export default function DarkModeSwitcher() {
  const [toggle, setToggle] = useState(false);
  const {theme, setTheme} = useContext(PortifolioContext);

  const LOCAL_STORAGE_KEY = 'hgo19Theme';


  useEffect(() => {
    const getThemePreference = () => {
      const themePreference = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (themePreference) setTheme(themePreference);
    };
    getThemePreference();
  }, [])

  const handleDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem(LOCAL_STORAGE_KEY, 'dark');
    } else {
      setTheme('light');
      localStorage.setItem(LOCAL_STORAGE_KEY, 'light');
    }
    setToggle(!toggle);
  };

  return (
    <div>
      <ButtonStyled type="button" onClick={handleDarkMode}>
      {toggle ? <><span>LightMode</span> <MdOutlineLightMode /></>: <><span>DarkMode</span> <MdDarkMode /></>}
      </ButtonStyled>
    </div>
  )
}