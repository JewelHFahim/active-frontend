import Auctions from "./auctions/Auctions";
import BannerMiddle from "./banners/banner-middle/BannerMiddle";
import BannerTop from "./banners/banner-top/BannerTop";
import Classifieds from "./classifieds/Classifieds";
import Display1 from "./display/Display1";
import Display2 from "./display/Display2";
import Display3 from "./display/Display3";
import EarlyBirds from "./early-birds/EarlyBirds";
import GetOffer from "./get-offer/GetOffer";
import LiveShopping from "./live-shopping/LiveShopping";
import NewArrival from "./new-arrival/NewArrival";
import PhoneAndAccessories from "./phone-accessories/PhoneAndAccessories";
import PopularCategories from "./popular-categories/PopularCategories";
import SalesAndDeals from "./sales-deals/SalesAndDeals";
import ShopByCategory from "./shop-by-category/ShopByCategory";

const HomePage = () => {
  return (
    <div className="mb-5">
      <BannerTop />
      <SalesAndDeals />
      <PopularCategories />
      <BannerMiddle />
      <NewArrival />
      <Display1 />
      <Display2 />
      <EarlyBirds />
      <GetOffer />
      <ShopByCategory />
      <Display3 /> 
      <PhoneAndAccessories />
      <Auctions />
      <Classifieds />
      <LiveShopping />
    </div>
  );
};

export default HomePage;
