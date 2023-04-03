import React from 'react'
import "../newnav/newnav.css";

export const NewNav = () => {
  return (
    <div className="new_nav">
    <div className="nav_data">
        <div className="left_data">
            <button className='prime'> All</button>
            <button className='prime'>Sell</button>
            <button className='prime'>Mobiles</button>
            <button className='prime'>Best Sellers</button>
            <button className='prime'>Fashion</button>
            <button className='prime'>Customer Service</button>
            <button className='prime'>Electronics</button>
            <button className='prime'>Prime</button>
            <button className='prime'>Today's Deals</button>
            <button className='prime'>Amazon Pay</button>
        </div>
        <div className="right_data">
            <img src="https://m.media-amazon.com/images/G/31/Events/img23/JanART/SWM_400x39_Live_Now._CB615689570_.jpg" alt="navdata" />
        </div>
    </div>
</div>
  )
}
