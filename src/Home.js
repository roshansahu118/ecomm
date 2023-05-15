// import styled from 'styled-components'
import Featuredproducts from './components/Featuredproducts';
import HomeCommon from './components/HomeCommon';
import Services from './components/Services';
// import Trusted from './components/Trusted';

const Home = () => {
  const data = {
    name: "Roshan Store",
    product_name: "OPPO"
  }
  return (
    <>
      <HomeCommon myData={data} />
      <Featuredproducts />
      <Services />
      {/* <Trusted /> */}
    </>
  );
};


export default Home;
