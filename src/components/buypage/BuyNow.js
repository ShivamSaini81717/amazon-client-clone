import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './main.css'
import { Optain } from './Optain';
import { Right } from "./Right";
import { SubTotal } from './SubTotal';
import {Empty} from './Empty';

export const BuyNow = () => {
   const [cartData,setCartdata]=useState("")

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });
        const data = await res.json();
        if (res.status !== 201) {
            alert("no data available")
        } else {
            setCartdata(data.carts); 
            console.log(data.carts);
        }
    };
    
    useEffect(() => {
        getdatabuy();
    }, []);
    
    // const [price, setPrice] = useState(0);
    // const totalAmount = () => {
    //     let price = 0
    //     cartData.map((e) => {
    //         price += e.price.cost
    //     })
    //     setPrice(price)
    // }

    // useEffect(() => {
    //     totalAmount();
    // }, [cartData]);

    

  return (  
    <>
    {cartData.length?
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider />
                    { cartData.map((e, ind) => {
                            return (
                                <>
                                    <div className="item_containert" 
                                    key={ind}
                                    > <img src={e.detaislUrl} alt="imgitem" />
                                        <div className="item_details">
                                            <h3>
                                            {e.longTitle}
                                            </h3>
                                            <h3>
                                            {e.shortTitle}
                                            </h3>
                                            <h3 className="diffrentprice">₹
                                            {e.cost}
                                            .00</h3>
                                            <p className="unusuall">Usually dispatched in 8 days.</p>
                                            <p>Eligible for FREE Shipping</p>
                                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                                             alt="logo" />
                                        <Optain deletedata={e.id} get={getdatabuy} />
                                        

                                        </div>
                                        <h3 className="item_price">₹
                                        {e.cost}
                                        .00</h3>
                                    </div>
                                    <Divider />
                                </> )  })   }

             
                    <SubTotal iteam={cartData} />
                </div>
            
                <Right item={cartData} />
            </div>
        </div> :<Empty />
    }
</>
  )
}
