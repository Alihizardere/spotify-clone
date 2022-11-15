import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '../Icons'

function Section({ title, more = false, items }) {
  const imageStyle = (item) => {
    if (item.type === 'artist') {
      return 'rounded-full'
    } else if (item.type === 'podcast') {
      return 'rounded-lg'
    } else {
      return 'rounded'
    }
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <NavLink>
          <h3 className="text-2xl font-semibold mb-4 tracking-tighter  hover:underline">
            {title}
          </h3>
        </NavLink>

        <NavLink
          className="text-xs font-bold text-link tracking-widest uppercase hover:underline"
          to={more}
        >
          HEPSİNİ GÖR
        </NavLink>
      </div>
      <div className="grid grid-cols-8 gap-x-6 ">
        {items.map((item) => (
          <NavLink
            className=" p-5 rounded bg-footer group transition-colors hover:bg-active"
            key={item.id}
            to="/"
          >
            <div className="pt-[100%] relative mb-4">
              <img
                className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
                  item
                )}  `}
                src={item.image}
                alt=""
              />
              <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full  hidden group-hover:flex items-center justify-center bg-primary">
                <Icon name="play" />
              </button>
            </div>
            <h6 className="font-semibold overflow-hidden overflow-ellipsis mb-1">
              {item.title}
            </h6>
            <p className="text-link text-sm font-semibold line-clamp-2">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Section
