import React, { useContext } from 'react'
import { LoginContext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Optain = ({deletedata,get}) => {
    const { account, setAccount } = useContext(LoginContext);


    const removedata = async (id) => {
        try {
            const res = await fetch(`remove/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
           

            if (res.status === 400 || !data) {
                console.log("error remove time pr");
            } else {
                setAccount(data);
                get();
                toast.success("Iteam remove from cart", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className="add_remove_select"
     key={deletedata}
     >
    <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <p 
    onClick={() => removedata(deletedata)} 
    style={{ cursor: "pointer" }}>Delete</p><span>|</span>
    <p className="forremovemedia">Save Or Later</p><span>|</span>
    <p className="forremovemedia">See More like this</p>
    <ToastContainer />
</div>
  )
}
