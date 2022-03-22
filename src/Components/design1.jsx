import React from 'react'
import DeanImg from '../images/DEAN2.PNG'

function design1() {

  const setPink = () => {
    const color3 = document.getElementById('color')
    color3.style.backgroundColor ="#E4D1E9"
    const shape = document.getElementById('shape')
    shape.style.backgroundColor ="#A6FFEF"
    const navbtn = document.getElementById('navbtn')
    navbtn.style.backgroundColor = "#E4D1E9"
  }

  const setBeige = () => {
    const color3 = document.getElementById('color')
    color3.style.backgroundColor = "#F1EFED"
    const shape = document.getElementById('shape')
    shape.style.backgroundColor = "#C2B7A4"
    const navbtn = document.getElementById('navbtn')
    navbtn.style.backgroundColor ="#F1EFED"
  }

  const setRed = () => {
    const color3 = document.getElementById('color')
    color3.style.backgroundColor = "#5C5C5C"
    const shape = document.getElementById('shape')
    shape.style.backgroundColor = "#F58A8A"
    const navbtn = document.getElementById('navbtn')
    navbtn.style.backgroundColor = "#5C5C5C"
  }


  return (
    <div>
      <div className='color3' id="color">
        <div className='text'>
          <h2 >Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit nibh
            , semper vel ligula sagittis, vestibulum commodo justo. Nullam volutpat velit sed quam elementum
            , a consectetur purus dapibus. Orci varius natoque penatibus et magnis dis parturient montes
            , nascetur ridiculus mus. Sed interdum nulla sed tincidunt ultrices. Mauris tincidunt consectetur
             libero ut mollis. Phasellus augue massa, viverra id est at, luctus pharetra tortor. Nam ut convallis nibh
             , posuere pellentesque ex. eleifend id.
          </p>
        </div>
        <div className='nav-button'>
          <div className='nav-innercircle' id="navbtn"></div>
        </div>
        <div className='shape' id="shape"></div>
        <div className='circle'>
          <img className='inner-circle' src={DeanImg} alt="dean"/>
        </div>
        <ul className='colorchange-list'>
          <li className='circle-btn' id="pink" onClick={setPink}></li>
          <li className='circle-btn' id="beige" onClick={setBeige}></li>
          <li className='circle-btn' id="red" onClick={setRed}></li>
        </ul>
      </div>
      <a href="Designs" className='mt-5 btn-contact'>Back</a>
    </div>
  )
}

export default design1
