import React from 'react'

import './Full.scss'
import LoadingSpinnerMain from './Main'

const LoadingSpinnerFull: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className="full-screen-loader">
          <LoadingSpinnerMain />
        </div>
      ) : null}
    </>
  )
}

export default LoadingSpinnerFull
