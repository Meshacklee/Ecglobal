import React from 'react'
import "./Footer.css"

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-addres'>
          <h3><span className='Badge'>Address :</span> Kucukbakkalkoy mah. selv </h3>
          <h3>Lsk No. 4c Kapi No: 20 ATA EH R/ Istanbul</h3>
          <h4>+(90) 505 277 5435 (Turkiye)</h4>
          <h4>info@ecglobalpetrol.com</h4>
        </div>


        <div className='footer-abt'>
          <h1>About the Company</h1>
          <p><span className='Badge'>ECGLOBALPETROL OIL & GAS</span> is an oil and gas
          <br></br> exploration and production company with a focus on <br></br>finding and producing oil in sub-Saharan Africa  </p>

        </div>
       
      

    </div>
  )
}

export default footer
