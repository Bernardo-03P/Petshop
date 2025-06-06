import React from 'react'

function ContentPhotos(props) {
  return (
    <div>
        <section>
            
            <img className='ImgAdestramento' src={props.ImgAdestramento} alt={props.TituloAdestramento} />
                         
        </section>
    </div>
  )
}

export default ContentPhotos
