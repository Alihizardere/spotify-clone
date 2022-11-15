import React from 'react'
import { Icon } from '../../Icons'
import { Menu } from '@headlessui/react'

function Auth() {
  const user = {
    name: 'Ali Hızardere',
    avatar: 'https://i.scdn.co/image/ab6775700000ee8520344983959fd402e72369f3',
  }
  return (
    <Menu as="nav" className={'relative z-10 '}>
      <Menu.Button
        className={
          'h-8 flex items-center justify-center gap-x-2 pr-2  transition-colors bg-black bg-opacity-60 rounded-3xl cursor-pointer hover:bg-active'
        }
      >
        <img
          className={'w-7 h-7 px-0.5 rounded-full object-cover'}
          src={user.avatar}
          alt=""
        />
        <span className={'text-sm font-semibold'}>{user.name}</span>
        <Icon size={16} name="downDir" />
      </Menu.Button>
      <Menu.Items
        className={
          'absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2'
        }
      >
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                active && 'bg-white bg-opacity-10'
              }`}
              href="/account-settings"
            >
              Hesap
              <Icon size={16} name="external" />
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                active && 'bg-white bg-opacity-10'
              }`}
              href="/account-settings"
            >
              Profil
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                active && 'bg-white bg-opacity-10'
              }`}
              href="/account-settings"
            >
              Ayarlar
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex justify-between items-center px-2 text-sm pt-1 border-t border-white border-opacity-20 ${
                active && 'bg-white bg-opacity-10'
              }`}
              href="/account-settings"
            >
              Oturumu Kapat
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Auth
