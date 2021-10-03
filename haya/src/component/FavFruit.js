import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Update from './Update';


class FavFruit extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favData:[],
      showModal:false,
      seletedItem:{}
    }  }
    
    updateFav=(e)=>{
      e.preventDefault();
      let parsPrice=parseInt(e.target.frPrice.value)
      const reqBody={
        name:e.target.frName.value,
        image:e.target.frImg.value,
        price:parsPrice,
        email:this.props.auth0.user.email
      }
      axios.put(`${process.env.REACT_APP_URL}/fav/${this.state.seletedItem._id}`,reqBody).then(updatedData=>{
        let updateFavData=this.state.favData.map(fav=>{
          if(fav._id===this.state.seletedItem._id){
            fav=updatedData.data
            return fav
          }
          return fav
        })
        this.setState({favData:updateFavData});
        this.handelDispalyUpdatedModal();
      })
    }

    deleteFav=(itemId)=>{
      axios.delete(`${process.env.REACT_APP_URL}/fav/${itemId}`).then(deletedFav=>{
        if(deletedFav.data.deletedCount===1){
          let newFavs=this.state.favData.filter(fav=>fav._id!==itemId)
          this.setState({favData:newFavs});
        }
      })
    }
handelDispalyUpdatedModal=async(item)=>{
await this.setState({
  showModal:!this.state.showModal,
  seletedItem:item
})
}
    componentDidMount=()=>{
      axios.get(`${process.env.REACT_APP_URL}/fav?email=${this.props.auth0.user.email}`).then(resData=>{
        this.setState({favData:resData.data})
      })
    }
    render() {
    return(
      <>
      {
        this.state.showModal&&
        <Update
        updateFav={this.updateFav}
        showModal={this.state.showModal}
        handelDispalyUpdatedModal={this.handelDispalyUpdatedModal}
        seletedItem={this.state.seletedItem}
        />
      }
      {
        this.state.favData.map(item=>{
          return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
     {item.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.handelDispalyUpdatedModal(item)} >Update</Button>
    <Button variant="danger" onClick={()=>this.deleteFav(item._id)} >Delete</Button>

  </Card.Body>
</Card>   ) } )}
 </>
    )
  }
}

export default withAuth0(FavFruit);
