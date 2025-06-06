import React from 'react'

function StaticBanner(props) {
  return (
    <div>
        <section className="containerBanner">
            <img className='bannerAdestramento' src={props.ImagemBanner} alt={props.TituloBanner} /> 
        </section>
    </div>
  )
}

export default StaticBanner
