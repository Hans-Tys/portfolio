
import Design1 from '../Components/design1'
import React, { useState } from 'react'


function Designs() {
  const design1 = document.getElementById('design1');
  const [show, setShow] = useState(false)


  return (
    <div className='Designs' id="Designs"  >
      <h2>Designs</h2>
        <div className='designs-container' >
        <div className='design-small' id="design1" onClick={() => setShow(!show)}>
          </div>
        </div>
        {
        show ? <div>
          <Design1 />
          <button className='back-btn' onClick={()=>setShow(!show)}>back</button>
        </div> :null
        }

    </div>
  )
}

export default Designs
