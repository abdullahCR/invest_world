import React from 'react'
import './Main.scss'

const HeroMain: React.FC<{
  image?: string
  video?: string
  customLayer?: React.FC
  disableLayer?: boolean
}> = ({ image, video, children, customLayer: Layer, disableLayer }) => {
  return (
    <>
      {image ? (
        <div>
          <section
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="hero-main"
          >
            <div className="children">{children}</div>
            {!disableLayer && Layer ? <Layer /> : <div className="semi-trans-layer" />}
          </section>
        </div>
      ) : null}
      {video ? (
        <section className="hero-main video">
          <video id="hero-video" autoPlay loop muted poster="#">
            <source src={video} type="video/mp4" />
          </video>
          <div className="children">{children}</div>
          {!disableLayer && Layer ? <Layer /> : <div className="semi-trans-layer" />}
        </section>
      ) : null}
    </>
  )
}

export default HeroMain
