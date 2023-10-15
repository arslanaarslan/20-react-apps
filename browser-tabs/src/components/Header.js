import React from "react";
import Tab from "./Tab";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="tabs">
      <Tab>
        <NavLink to="/" className={({isActive}) => isActive ? 'is-active' : ''}>Home</NavLink>
      </Tab>
      <Tab>
        <NavLink to="/about" className={({isActive}) => isActive ? 'is-active' : ''}>About</NavLink>
      </Tab>
      <Tab>
        <NavLink to="/features" className={({isActive}) => isActive ? 'is-active' : ''}>Features</NavLink>
      </Tab>
    </div>
  );
}
