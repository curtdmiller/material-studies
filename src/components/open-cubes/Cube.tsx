import * as React from 'react'

interface Props {
  outer: [boolean, boolean, boolean, boolean, boolean, boolean]
  inner: [boolean, boolean, boolean, boolean, boolean, boolean]
}

const Cube = ({ outer, inner }: Props) => {
  return (
    <svg viewBox="-102 -102 204 204">
      <line className="bg" x1="0" y1="-100" x2="86.6025403784" y2="-50" />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(60)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(120)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(180)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(240)"
      />
      <line
        className="bg"
        x1="0"
        y1="-100"
        x2="86.6025403784"
        y2="-50"
        transform="rotate(300)"
      />
      <line className="bg" x1="0" y1="0" x2="0" y2="-100" />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(60)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(120)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(180)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(240)"
      />
      <line
        className="bg"
        x1="0"
        y1="0"
        x2="0"
        y2="-100"
        transform="rotate(300)"
      />
      {outer[0] && <line x1="0" y1="-100" x2="86.6025403784" y2="-50" />}
      {outer[1] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(60)"
        />
      )}
      {outer[2] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(120)"
        />
      )}
      {outer[3] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(180)"
        />
      )}
      {outer[4] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(240)"
        />
      )}
      {outer[5] && (
        <line
          x1="0"
          y1="-100"
          x2="86.6025403784"
          y2="-50"
          transform="rotate(300)"
        />
      )}
      {inner[0] && <line x1="0" y1="0" x2="0" y2="-100" />}
      {inner[1] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(60)" />
      )}
      {inner[2] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(120)" />
      )}
      {inner[3] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(180)" />
      )}
      {inner[4] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(240)" />
      )}
      {inner[5] && (
        <line x1="0" y1="0" x2="0" y2="-100" transform="rotate(300)" />
      )}
    </svg>
  )
}

export default Cube
