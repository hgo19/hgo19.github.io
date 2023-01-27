import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import PortifolioContext from './PortifolioContext';

export default function PortifolioProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const contextValue = useMemo(() => ({
    theme, setTheme,
  }), [theme]);

  return (
    <PortifolioContext.Provider value={contextValue}>
      {children}
    </PortifolioContext.Provider>
  );
}

PortifolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
