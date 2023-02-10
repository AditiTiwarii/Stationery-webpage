import "./App.css";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import {MenuItems, Items} from "./Components/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";

function App() {

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "clips01")
  )

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach(n => n.addEventListener("click", setMenuActive));

/*menu card*/

    const menuCards = document
    .querySelector(".rowContainer")
    .querySelectorAll(".rowMenuCard");

    function setMenuCardActive(){
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      <Header />

      <main>
      <div className="mainContainer">

          <div className="banner">
            <BannerName name={"Aditi"} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/stationery-10522.appspot.com/o/cute.png?alt=media&token=682757d8-ff34-40ee-8ebe-12d4a3b7fe4d"
              alt=""
              className="kawai"
            />
          </div>

          <div className="itemsContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className="rowContainer">

            {
              MenuItems && 
              MenuItems.map((data) => (
              <div key={data.id} onClick={() => setData(data.itemId)}>
              <MenuCard 
              imgSrc={data.imgSrc}
              name={data.name} 
              isActive = {data.id === 1 ? true : false}
              />
            </div>
              ))}
          </div>
            <div className="extraitemContainer">
              {
                isMainData && isMainData.map(data => (
                  
              <ItemCard 
              key={data.id}
              itemId={data.id}
              imgSrc={data.imgSrc}
              name={data.name} 
              rating={data.ratings} 
              price={data.price} />
                ))
              }
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          <div className="cartCheckOutContainer">
          <SubMenuContainer name={"Carts Items"}/>
            <div className="cartContainer">
              <div className="cartItems">
                <CartItem 
                name={"Clips"}
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/stationery-10522.appspot.com/o/1.jpg?alt=media&token=f88f9fe9-eaf0-4581-9ff9-5f217dcf1c19"}
                price={"7.55"}
                />
              </div>
            </div>

            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span>55.50
              </p>
            </div>

            <button className="checkout">Check Out</button>

          </div>
        </div>
      </main>





      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon= {<HomeRounded />}  isHome/>

          <MenuContainer link={'#'} icon= {<Chat />} />

          <MenuContainer link={'#'} icon= {<AccountBalanceWalletRounded />} />

          <MenuContainer link={'#'} icon= {<Favorite/>} />

          <MenuContainer link={'#'} icon= {<SummarizeRounded/>} />

          <MenuContainer link={'#'} icon= {<Settings />} />

        </ul>
      </div>
    </div>
  );
}

export default App;
