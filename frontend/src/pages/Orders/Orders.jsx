import React from "react";

const Orders = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  useEffect(() => {
    updateCartItemCount();
    window.addEventListener("storage", updateCartItemCount);

    return () => {
      window.removeEventListener("storage", updateCartItemCount);
    };
  }, []);
  return <div>
     <Navbar cartItemCount={cartItemCount} />
     <Slider></Slider>
     <ShopHero />
     <Footer></Footer>
      <FooterBar cartItemCount={cartItemCount}></FooterBar>
  </div>;
};

export default Orders;
