import { createContext, useState } from 'react';

export const PortfolioContext = createContext({});

export function PortfolioProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState();
  const [dark, setDark] = useState(false);

  return (
    <PortfolioContext.Provider value={{ menuOpen, dark, setMenuOpen, setDark }}>
      {children}
    </PortfolioContext.Provider>
  );
}
