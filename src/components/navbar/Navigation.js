import React from 'react'
import { Icon } from '../../Icons'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const navigate = useNavigate()
  return (
    <nav className="flex gap-x-4">
      <button
        onClick={() => navigate()}
        className="w-8 h-8 bg-active rounded-full flex items-center justify-center"
      >
        <Icon size={22} name="prev" />
      </button>

      <button
        onClick={() => navigate()}
        className="w-8 h-8 bg-active rounded-full flex items-center justify-center"
      >
        <Icon size={22} name="next" />
      </button>
    </nav>
  )
}

export default Navigation
