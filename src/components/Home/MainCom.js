import React, { useEffect } from 'react'
import "../Home/MainCom.css";
import { Banner } from './Banner';
import Slider from './Slider';
import { Divider } from '@mui/material';
import { getProducts } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

export const MainCom = () => {

    const {products} = useSelector((state) => state.getproductsdata);
 
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])
  return (
    <>
            <div className="home_section">
                <div className="banner_part">
               <Banner/>
                </div>
                <div className="slide_part">
                    <div className="left_slide">

                        <Slider title="Deal Of The Day" Products={products}/>
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="/">see more</a>
                    </div>
                </div>

                <Slider title="Today's Deal" 
                Products={products}

                />

                <div className="center_img">
                    <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
                </div>

                <Slider title="Best Seller" 
                Products={products} 

                />
                <Slider title="Upto 80% off" 
                Products={products} 

                />
            </div>

            <Divider />

        </>

  )
}
