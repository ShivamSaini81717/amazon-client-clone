import React, { useState } from 'react'
import { Divider } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import "./Dashboard.css"
export const DashBoard = () => {
  const [udata, setUdata] = useState({
    id:"" ,
    url:"",
    detaislUrl:"" ,
    Stock:"",
    shortTitle:"",
    longTitle:"",
    mrp:"",
    cost:"",
    discountS:"",
    category:"",
    description:"",
    discount:"",
    tagline:"" ,
});
const adddata = (e) => {
  const { name, value } = e.target;
console.log(value)
  setUdata(() => {
      return {
          ...udata,
          [name]: value
      }
  })
};




const senddata = async (e) => {
  e.preventDefault();

  const {id ,url,detaislUrl ,Stock,shortTitle,longTitle,mrp,cost,discountS,category,description, discount,tagline } = udata;

if(id===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
}else 
if(url===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else if(mrp===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else if(tagline===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else if(discountS===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else
if(cost===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else if(category===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else  if(description===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else
if(discount===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
  
}else
if(detaislUrl===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
}else if(Stock===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
}
else if(longTitle===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
}
else if(shortTitle===""){
  toast.error("Please fill the Form", {
      position: "top-center", 
  });
}else{
      const res = await fetch("/productCreate", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id,url,detaislUrl ,Stock,shortTitle,longTitle,mrp,cost,discountS,category,description, discount,tagline
          })
      });
  
      const data = await res.json();
      // console.log(data);

      if (res.status === 422 || !data) {
          toast.error("Invalid Details", {
              position: "top-center"
          });
      } else {
          setUdata({
              ...udata,  id:"" ,
              url:"",
              detaislUrl:"" ,
              Stock:"",
              shortTitle:"",
              longTitle:"",
              mrp:"",
              cost:"",
              discountS:"",
              category:"",
              description:"",
              discount:"",
              tagline:"" ,
          });
          toast.success("Product Added", {
              position: "top-center",
            
          });
      }
  
}
}


  return (
    <section>

            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create Product</h1>
                        <div className="form_data">
                            <label htmlFor="name">Product Id</label>
                            <input type="text" name="id"
                                onChange={adddata}
                                value={udata.id}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">Short Title</label>
                            <input type="Text" name="shortTitle"
                                onChange={adddata}
                                value={udata.shortTitle}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">long Title</label>
                            <input type="Text" name="longTitle"
                                onChange={adddata}
                                value={udata.longTitle}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">M.R.P</label>
                            <input type="number" name="mrp"
                                onChange={adddata}
                                value={udata.mrp}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Cost</label>
                            <input type="number" name="cost"
                                onChange={adddata}
                                value={udata.cost}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Discount</label>
                            <input type="number" name="discount"
                                onChange={adddata}
                                value={udata.discount}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Stock</label>
                            <input type="number" name="Stock"
                                onChange={adddata}
                                value={udata.Stock}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">Description</label>
                            <input type="Text" name="description"
                                onChange={adddata}
                                value={udata.description}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">URL</label>
                            <input type="Text" name="url"
                                onChange={adddata}
                                value={udata.url}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">DETAILS URL</label>
                            <input type="Text" name="detaislUrl"
                                onChange={adddata}
                                value={udata.detaislUrl}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">Category</label>
                            <input type="Text" name="category"
                                onChange={adddata}
                                value={udata.category}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">Discount TEXT</label>
                            <input type="Text" name="discountS"
                                onChange={adddata}
                                value={udata.discountS}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="name">Tagline</label>
                            <input type="Text" name="tagline"
                                onChange={adddata}
                                value={udata.tagline}
                                id="name" />
                        </div>
                        
                  
                    
                        <button type="submit" className="signin_btn"
                         onClick={senddata}
                         >Continue</button>

                     <Divider /><Divider />

                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
  )
}
