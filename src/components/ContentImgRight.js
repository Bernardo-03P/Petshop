import React from 'react'

function ContentImgRight(props) {
  return (
    <div>
        <section>
        <section className='containerright'>
            <div className='txtright' >
                <p>{props.Txtright}</p>
                <p>{props.Txtright2}</p>
                <button className='btnsaibamais'>Saiba mais</button>
            </div>
            <img src={props.ImagemRight} alt={props.AltImgRight} />
        </section>
        </section>
    </div>
  )
}

export default ContentImgRight
