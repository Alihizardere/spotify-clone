import React from 'react'
import { Range, getTrackBackground } from 'react-range'

function CustomRange({ value, min, max, step, onChange }) {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          className="w-full flex group"
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{ ...props.style }}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-sm self-center"
            style={{
              background: getTrackBackground({
                values: [value],
                colors: ['#1db954', '#5e5e5e'],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          className={`h-3 w-3 rounded-full bg-white opacity-0 ${
            !isDragged ? 'opacity-0' : 'opacity-100'
          } group-hover:opacity-100`}
          {...props}
          style={{
            ...props.style,
            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 50%)',
          }}
        />
      )}
    />
  )
}

export default CustomRange
