import React, { useContext, useState } from 'react'
import PortifolioContext from '../../context/PortifolioContext';

import { ButtonStyled } from './styles';

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
      {toggle ? 'DarkMode ON' : 'DarkMode OFF'}
      </ButtonStyled>
    </div>
  )
}
