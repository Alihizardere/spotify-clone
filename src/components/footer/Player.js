import React, { useMemo } from 'react'
import { Icon } from '../../Icons'
import CustomRange from '../CustomRange'
import { useAudio } from 'react-use'
import { secondsTotime } from '../../utils'

function Player() {
  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  })
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return 'volumeMuted'
    if (state.volume > 0 && state.volume < 0.33) return 'volumeLow'
    if (state.volume >= 0.33 && state.volume < 0.66) return 'volumeNormal'
    else return 'volumeFull'
  }, [state.volume, state.muted])

  return (
    <div className=" h-full px-4 flex items-center justify-between">
      <div className="min-w-[11.25rem] w-[30%] flex">SOL</div>

      <div className="max-w-[45.125rem] w-[40%] px-4 flex flex-col items-center">
        <div className="flex items-center gap-x-4 mb-3">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={16} />
          </button>

          <button
            onClick={controls[state?.playing ? 'pause' : 'play']}
            className="w-8 h-8 flex items-center justify-center text-black bg-white hover:scale-[1.06] rounded-full"
          >
            <Icon name={state?.playing ? 'pause' : 'play'} size={16} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size={16} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16} />
          </button>
        </div>

        <div className="w-full flex items-center gap-x-2">
          <div className="text-link text-[0.688rem]">
            {secondsTotime(state?.time)}
          </div>

          {audio}
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-link text-[0.688rem]  ">
            {secondsTotime(state?.duration)}
          </div>
        </div>
      </div>

      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end ">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="lycris" size={16} />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size={16} />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="device" size={16} />
        </button>

        <button
          onClick={controls[state.muted ? 'unmute' : 'mute']}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute()
              controls.volume(value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Player
