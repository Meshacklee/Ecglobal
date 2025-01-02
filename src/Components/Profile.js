import React from 'react'
import "./Profile.css"
import Navbar from './Navbar'
import Footer from './Footer'
const Profile = () => {
  return (
    <div>
      <Navbar />
    <div className='cardi'>
        <div class="card">
  <img src="./Asset/logooo.jpg" className="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Mr. Eke Chika is the CEO managing director of EC Global oil Petrol</p>
  </div>
</div>


<div class="card">
  <img src="./Asset/2.jpg" className="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">DMr Gaga Unufe is one of the Directors of Ceneni Oil and Gas Company. He has a degree in Petroleum Engineering, and has working experience with Dadi Oil and Gas Company, where he worked for ﬁve years and Oso Marine and Energy where he worked for two years respectively. Apart from the oil and gas sector, he has managerial experience. He was one time a manager with Tiger Plastica Company owned 
      by a Korean for a period of two years, and also operational manager with Tomahass Engineering Company for two years.</p>
  </div>
</div>


<div class="card">
  <img src="./Asset/2666.jpg" className="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">ANITAESI
DIRECTOR OF ADMIN
A graduate of business administration and MBA in marketing, she has worked with many companies including Efe Finance Holdings, First Bank of Nigeria Plc and Tedway Nigeria Limited before moving over to Ceneni Oil & Gas Company Limted.</p>
  </div>
</div>

    </div>

<Footer />
    </div>
  )
}

export default Profile