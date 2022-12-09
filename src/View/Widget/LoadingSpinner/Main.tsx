import React from 'react'

import './Main.scss'

const LoadingSpinnerMain: React.FC = () => {
  return (
    <>
      <div className="loading-spinner-holder">
        <div className="spinner-border text-primary" role="status" />
      </div>
    </>
  )
}

export default LoadingSpinnerMain
