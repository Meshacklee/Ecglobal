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
  <img src="./Asset/1.jpg" className="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Dr. Richy  Ekson - Williams. (Executive Chairman) He is a private investor with over 30years of investment experience in Africa and Eastern Europe with his medical training he is exposed to a lot of people, organization and have a very good background on Health. He is the founder of Eke Ventures Group, a private investment company with investments across many sectors including infrastructural and resource sectors, mining and exploration and he is a co-founder and 
      Director of the following companies Eksson concept limited, a private resource investment and Development Company.</p>
  </div>
</div>


<div class="card">
  <img src="./Asset/2.jpg" className="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">DMr Gaga Unufe is one of the Directors of Ceneni Oil and Gas Company. He has a degree in Petroleum Engineering, and has working experience with Dadi Oil and Gas Company, where he worked for ﬁve years and Oso Marine and Energy where he worked for two years respectively. Apart from the oil and gas sector, he has managerial experience. He was one time a manager with Tiger Plastica Company owned 
      by a Korean for a period of two years, and also operational manager with Tomahass Engineering Company for two years.</p>
  </div>
</div>
    </div>

<Footer />
    </div>
  )
}

export default Profile