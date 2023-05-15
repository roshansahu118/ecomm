import React from 'react'
import HomeCommon from './components/HomeCommon'
import { useProductContext } from './context/ProductContext';

const About = () => {
  // const {MyNewName, MyAge} = useContext(AppContext);
  const newData = useProductContext();
  const data = {
    name: "Roshan Ecommerce",
  };
  
  return (
    <div>
    {/* my name is {MyNewName} and my age is {MyAge}. */}
      <HomeCommon myData={data} />
    </div>
  )
}

export default About
