import React from 'react'

function ContentImgLeft(props) {
  return (
    <div>
        <section className='containerleft'>
            <img className='imgleft'src={props.ImagemLeft} alt={props.AltImgLeft} />
            <div className='txtleft' >
                <p>{props.TxtLeft}</p>
                <p>{props.TxtLeft2}</p>
                <button className='btnsaibamais'>Saiba mais</button>
            </div>
        </section>
    </div>
  )
}

export default ContentImgLeft
