import {Card, Container}  from 'semantic-ui-react'

function ProductList({products}) {
  function mapProductsToItems(products){
  return products.map(product => ({
    header : product.name,
    image : product.mediaUrl,
    meta: `$${product.price}`,
    color : 'teal',
    fluid : true,
    childkey :  product._id,
    href : `/product?_id=${product._id}`

  }));
  }
  return [
    <Container text><Card.Group stackable itemsPerRow = "3" centered items = {mapProductsToItems(products)} /></Container>
]
}

export default ProductList;
  