import {Header,Button, Modal} from 'semantic-ui-react'
import React from 'react'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import {useRouter} from 'next/router'

function ProductAttributes({description, _id}) {
  const[modal, setModal] = React.useState(false)
  const router = useRouter()
  async function handleDelete(){
    const url= `${baseUrl}/api/product`;
    const payload = {params : { _id }}
    await axios.delete(url, payload);
    router.push('/');
  }
  return <>
  <Header as="h3">About this product</Header>
<p>{description}</p>
<Button icon = "trash alternate outline"
        color="red"
        content="Delete Product"
        onClick={() => setModal(true)}></Button>
<Modal open={modal}
        dimmer="blurring">
          <Modal.Header>Confirm Delete</Modal.Header>
          <Modal.Content>Are you sure you want to delete the product</Modal.Content>
          <Modal.Actions>
            <Button content="Cancel" 
            onClick={() => setModal(false)}></Button>
            <Button content="Delete"
            negative
            onClick={handleDelete}
            icon= "trash"
            labelPosition="right"></Button>
          </Modal.Actions>
        </Modal>
  </>;
}

export default ProductAttributes;