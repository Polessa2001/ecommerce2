import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
const Header = () => {
  useContext(SidebarContext);
  return(
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
