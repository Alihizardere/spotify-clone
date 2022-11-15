import React from 'react'
import logo from '../logo/logo.svg'
import Menu from './sidebar/Menu'
import Playlist from './sidebar/Playlist'
import DownloadApp from './sidebar/DownloadApp'
import { Icon } from '../Icons'

function Sidebar() {
  return (
    <aside className="flex flex-shrink-0 flex-col bg-black border-r border-white border-opacity-20 w-60 pt-6 ">
      <div className="mb-6 px-6" href="">
        <img src={logo} alt="" className="h-10" />
      </div>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center group px-6 py-2 text-sm font-semibold text-link hover:text-white"
            >
              <span className="h-6 w-6 flex  items-center justify-center mr-4 rounded-sm text-black transition-all bg-white bg-opacity-60 group-hover:bg-opacity-100">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center group px-6 py-2 mr-4 text-sm font-semibold text-link hover:text-white"
            >
              <span className="h-6 w-6 flex  items-center justify-center mr-4 rounded-sm text-white transition-all bg-gradient-to-br from-purple-700 to-blue-300 opacity-60 group-hover:opacity-100">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlist />
      <DownloadApp />
    </aside>
  )
}

export default Sidebar
