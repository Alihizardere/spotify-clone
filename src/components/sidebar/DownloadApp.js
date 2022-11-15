import React from 'react'
import {Icon} from '../../Icons'

function DownloadApp() {
  return (
    <a href className=" flex flex-shrink-0 items-center h-10 px-4 gap-x-4 transition-colors text-link text-sm font-semibold hover:text-white">
         <Icon name="download" />           
          Uygulamayı Yükle
    </a>
  )
}

export default DownloadApp