import React, { useContext, useState } from 'react'
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md';
import PortifolioContext from '../../context/PortifolioContext';

import ButtonStyled from './styles';

export default function DarkModeSwitcher() {
  const [toggle, setToggle] = useState(false);
  const {theme, setTheme} = useContext(PortifolioContext);

  const handleDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    setToggle(!toggle);
  };

  return (
    <div>
      <ButtonStyled type="button" onClick={handleDarkMode}>
      {toggle ? <><span>DarkMode</span> <MdDarkMode /></>: <><span>LightMode</span> <MdOutlineLightMode /></>}
      </ButtonStyled>
    </div>
  )
}