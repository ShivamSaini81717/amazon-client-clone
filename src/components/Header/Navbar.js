import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/Contextprovider';
import {toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';

import { Drawer,List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { RightHeader } from './RightHeader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


// const usestyle = makeStyles({
//     component: {
//         marginTop: 10,
//         marginRight: "-50px",
//         width: "300px",
//         padding: 50,
//         height: "300px"
//     },
// })
const imgd = "/india.png"

export const Navbar = () => {
    // const classes = usestyle();

    const history = useNavigate("");

    const [text, setText] = useState();
    const [liopen, setLiopen] = useState(true);

    const { products } = useSelector(state => state.getproductsdata);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


    // const [open, setOpen] = useState(false);


    const [dropen, setDropen] = useState(false);


    const [anchorEl, setAnchorEl] =useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

   

    const { account, setAccount } = useContext(LoginContext);
    const getdetailsvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();
      
        if (res.status !== 201) {
            console.log("first login");
        } else {  
            setAccount(data);
        }
    }

    useEffect(() => {
        getdetailsvaliduser();
    }, []);


    // // for logout
    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        // console.log(data2);

        if (!res2.status === 201) {
            const error = new Error(res2.error);
            throw error;
        } else {
            setAccount(false);
            // setOpen(false);
            toast.success("Logout!", {
                position: "top-center"
            });
            history("/");
        }
    }

    // // for drawer

    const handelopen = () => {
        setDropen(true);
    }

    const handleClosedr = () => {
        setDropen(false)
    }
   const handleCloseaACOUNT =()=>{
    setDropen(false)
    history("/acount")
   }
   const handleCloseDash=()=>{
    setDropen(false)
    history("/dashboard")
   }

    const getText = (text) => {
        setText(text)
        setLiopen(false)
    }
    console.log(text)
//  -------------------------------laguage------------------------------------------------------------------------------------------
    // const options = [
    //     'English - EN',
    //     'हिन्दी - HI - अनुवाद',
    //     'தமிழ் - TA - மொழிபெயர்ப்பு',
    //     'తెలుగు - TE - అనువాదం',
    //     'ಕನ್ನಡ - KN - ಭಾಷಾಂತರ',
    //     'മലയാളം - ML - വിവർത്തനം',
    //     'বাংলা - BN - অনুবাদ',
    //     'मराठी - MR - भाषांतर',
       
    //   ];
      
  return (
    <header>
            <nav>
                <div className="left">
                    <IconButton className="hamburgur" 
                    onClick={handelopen}>
                    <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>    
                    <Drawer 
                    open={dropen} 
                    onClose={handleClosedr} 
                    >
                        <RightHeader
                         userlog={logoutuser}
                          logclose={handleClosedr}/>
                    </Drawer>
                    <div className="navlogo">
                        <NavLink to="/">
                         <img src="./amazon_PNG25.png" alt="logo" /> 
                         </NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name=""
                            onChange={(e) => getText(e.target.value)}
                            placeholder="Search Your Products" />
                        <div className="search_icon">
                        <SearchIcon id="search"/>
                        </div>
 {/*------------------------------------------    Search Filter -------------------------------------------------------------------------------- */}
                        {  text &&
                            <List className="extrasearch" hidden={liopen}>
                                {  products.filter(product => product.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.longTitle}
                                            </NavLink>
                                        </ListItem>
                                    )) }
                            </List>  }
  {/* ----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    </div>
                </div>
                <div className="right">
                <img src={imgd} alt="india flag" style={{ width: 25, marginRight: 20 }} />
                    <div className="nav_btn">
                        {account?<NavLink to="/account">Account</NavLink>:<NavLink to="/login">Sign in</NavLink>}
                    </div>
                            <div className="cart_btn">
                            {
                                account?
                                 <NavLink to="/buynow">
                            <Badge badgeContent=
                                {account.carts.length}
                                 color="primary">
                                  <ShoppingCartIcon id="icon"/>  
                                </Badge>
                            </NavLink>
                             :
                            <NavLink to="/login">
                            <Badge badgeContent={0}
                                 color="primary">
                                  <ShoppingCartIcon id="icon"/> 
                                </Badge>
                            </NavLink>
                            }  
                                <p>Cart</p>
                            </div>       
       {
        account? <Avatar className="avtar2"
         id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        >{ account.fname[0].toUpperCase()}</Avatar>:
        <Avatar className="avtar"
         id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        ></Avatar>
       }   
       <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {account?<MenuItem onClick={handleCloseDash}><DashboardIcon style={{fontSize:16,marginRight:3}}/>DashBoard<StarBorderPurple500Icon className='start'/></MenuItem>:""}
        <MenuItem onClick={handleCloseaACOUNT} ><AssignmentIndIcon style={{fontSize:16,marginRight:3}}/>My account</MenuItem>
        {
            account? 
            <MenuItem onClick={handleClose} onClick={logoutuser}><LogoutIcon style={{fontSize:16,marginRight:3}} />Logout</MenuItem>:""
        } 
      </Menu>
                </div>
            </nav>
        </header>
  )
}
