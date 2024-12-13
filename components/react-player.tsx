"use dom"

import ReactPlayer from "react-player"

export default function VideoPlayer({ url }: { url?: string | null }) {
  if (!url) return null
  return (
    <ReactPlayer
      url={url}
      width='100%'
      height='100%'
      controls
      style={{ position: "absolute", top: 0, left: 0 }}
      config={{
        youtube: {
          playerVars: { showinfo: 1 },
        },
      }}
    />
  )
}
