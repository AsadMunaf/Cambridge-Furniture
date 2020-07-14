import {Header, Segment , Button, Icon} from 'semantic-ui-react'



function CartItemList() {
  const user = false; 
  return (
      <Segment secondary color="teal" inverted textAlign="center" placeholder>
          <Header icon>
              <Icon name="shopping basket" >
              
              </Icon>
          </Header>
          No Product in your cart. Add some!
          <div>
            {user ? (
              <Button color="orange">
                View Products
              </Button>
            ):(
              <Button color="blue">
                Login to add Product
              </Button>
            )}
          </div>
      </Segment>
  )
}

export default CartItemList;
