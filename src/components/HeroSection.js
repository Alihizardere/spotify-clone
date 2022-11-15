import React from 'react'
import { Icon } from '../Icons'
import { NavLink } from 'react-router-dom'

function HeroSection() {
  const heroItems = [
    {
      id: 1,
      title: 'Beğenilen Şarkılar',
      image: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
    },
    {
      id: 2,
      title: 'CHORBA',
      image: 'https://i.scdn.co/image/ab67616d0000b2738e5714712b93ad67b58fbac1',
    },
    {
      id: 3,
      title: "It's My Life Radio",
      image:
        'https://seeded-session-images.scdn.co/v1/img/track/0v1XpBHnsbkCn7iJ9Ucr1l/tr',
    },
    {
      id: 4,
      title: 'In This Dark Time Radio',
      image:
        'https://seeded-session-images.scdn.co/v1/img/track/2tVJpUamLfNdUI7SiyPIFF/tr',
    },
    {
      id: 5,
      title: 'Oscar and The Wolf',
      image: 'https://i.scdn.co/image/ab6761610000e5ebbc8f670c35853a4fe50f6d60',
    },
    {
      id: 6,
      title: 'Joaqium Radio',
      image:
        'https://seeded-session-images.scdn.co/v1/img/track/4x6H3TK4kSnw1QOxuWD0c5/tr',
    },
  ]
  return (
    <div>
      <h3 className="text-3xl font-bold mb-5 tracking-tighter">İyi akşamlar</h3>
      <div className="grid grid-cols-3 gap-x-6 gap-y-4">
        {heroItems.map((heroitem) => (
          <NavLink
            to="/"
            className="h-20 flex items-center justify-between group rounded transition-all bg-active bg-opacity-60  hover:bg-link hover:bg-opacity-30"
          >
            <div className="flex items-center gap-x-4">
              <img
                className="h-20 w-20 rounded object-cover"
                src={heroitem.image}
                alt=""
              />
              <span className="font-semibold text-white line-clamp-1">
                {heroitem.title}
              </span>
            </div>
            <NavLink
              to="/"
              className="w-12 h-12 rounded-full text-black mr-4 hidden group-hover:flex items-center justify-center bg-primary"
            >
              <Icon name="play" />
            </NavLink>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
