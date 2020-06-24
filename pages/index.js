import React from "react";
import axios from "axios";
import {Container, Image} from 'semantic-ui-react'

import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'


function Home({ products }) {


  return [  
    <marquee direction="scroll">COVID 19: Safty measures:One of the most important things to remember is to maintain distance with others in the store. One should ensure that it is crucial to maintain a distance of six feet (approx. two metres) from another person at the store, the report said. Also, it is to note that even for grocery shopping, only one person is allowed to get it, therefore, it is recommended to go alone. Apart from this, a person’s mouth and nose should be covered with either a surgical mask or any other homemade mask, as directed by the government guidelines. Using gloves at a grocery store finds no mention, therefore, one can chose to wear it.</marquee>,
   <Container fluid><Image class="headerImage" src='https://res.cloudinary.com/dul7ycim4/image/upload/v1592941389/maxresdefault_m5fkkb.jpg' /> </Container>,
    <ProductList products={products} />

  ]
  
}

Home.getInitialProps = async () => {
  // fetch data on server
  
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};
 
export default Home;
