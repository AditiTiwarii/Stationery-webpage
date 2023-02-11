import React, { useEffect ,useState} from "react";
import {} from "@mui/material";
import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";


  function Header() {  
    useEffect(() => {
      const toggleMenu = document.querySelector(".toggleMenu");

      toggleMenu.addEventListener("click", () => {
        document.querySelector(".rightMenu").classList.toggle("active");
      });
    }, []);
    const [openMenu, setOpenMenu] = useState(false);
  const toggleMMenu = () => {
    setOpenMenu(!openMenu);
  };
    return (
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/stationery-10522.appspot.com/o/logo.jpg?alt=media&token=a806b3c9-32e2-4733-8aa0-e5491709dc12"
          alt=""
          className="logo"
        />
  
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">
            <p>2</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <div className="imgBox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/stationery-10522.appspot.com/o/profile.jpeg?alt=media&token=a1108c78-b88b-450e-956e-a9cb53566714"
              alt=""
              className="profilePic"
            />
          </div>

          <h2 className="userName">Aditi Tiwari</h2>
        </div>
  
        <div className="toggleMenu">
          <BarChart className="toggleIcon" onClick={toggleMMenu}/>
          {openMenu ? (
        <div className="toggleMenu">
         
        </div>
      ) : null}
        </div>
      </header>
    );
  }
  
  export default Header;