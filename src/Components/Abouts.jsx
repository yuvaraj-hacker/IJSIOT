import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Journal of Smart Internet of Things and Applications" />
      <About />
    </>
  )
}

export default Abouts