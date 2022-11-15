import React from 'react'
import {Icon} from '../../Icons'
import {NavLink} from "react-router-dom"


function Menu() {
  
  return (
    <nav className="px-1">
      <ul className="flex flex-col ">
        <li>
          <NavLink  to="/" end  className="h-10 flex items-center text-sm px-6 text-link font-semibold gap-x-4 rounded hover:text-white" >
             <span>
                <Icon name="home"/>
             </span>
              Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink to="/search"   className=" h-10 flex items-center text-sm px-6 text-link font-semibold gap-x-4 rounded hover:text-white">
          <span>
                <Icon name="search"  />
             </span>
            Ara
          </NavLink>
        </li>
        <li>            
          <NavLink to="/collection"  className=" h-10 flex items-center text-sm px-6 text-link font-semibold gap-x-4 rounded hover:text-white">
            <span>
                <Icon name="collection"/>
             </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
