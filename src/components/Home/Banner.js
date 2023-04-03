import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../Home/Banner.css";
const data = [
    "https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/815NTd7X+gL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/614eJ9FenlL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg", 
]


export const Banner = () => {
  return (
    <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 50,
                        marginTop: -22,
                        height: "50px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
          <div className="slider">
          <Carousel
           className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 50,
                        marginTop: -10,
                        height: "20px",
                    }
                }}
          
          >{
            <>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-footwear.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/ALL_DEALS.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/Blockbuster_deals.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/Trending_Deals.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_Mobile.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-beauty.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/deals-clothing.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/dEALS_jwel_v2.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/Home.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-kitchen.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jup22/33/1/2/PCTab_Ellipse_150x150.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-kids.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-game.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-device.jpg"/>
<img src="https://m.media-amazon.com/images/G/31/Deals/Jupiter22/KSD/SBCIcons/All_Asin-Icon_4950x150_01-TV.jpg"/>
</>}
</Carousel>
          </div> 


     
        </>
  )
}
