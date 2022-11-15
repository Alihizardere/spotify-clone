import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Collection from '../pages/Collection'

function Content() {
  return (
    <main className="flex-auto overflow-auto ">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route path="/" end element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
        </Routes>
      </div>
    </main>
  )
}

export default Content
