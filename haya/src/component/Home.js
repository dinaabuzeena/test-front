import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 import axios from 'axios';

 class Home extends Component {
     constructor(props){
         super(props);
         this.state={
             all:[]
         }
     }



     addToFav=(item)=>{
         const reqBody={
             name:item.name,
             image:item.image,
             price:item.price,
             email:this.props.auth0.user.email

         }
         axios.put(`${process.env.REACT_APP_URL}/fav`, reqBody)
     }
componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_URL}/fav`).then(resData=>{
        this.setState({all:resData.data.fruits})
    })
}


    render() {
        return (
            <>
              {
                  this.setState.all.map(item=>{
                      return(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                         {item.price}
                          </Card.Text>
                
                          <Button variant="denger"onClick={()=>this.addToFav(item)}>delete</Button>
                        </Card.Body>
                      </Card> 
                      )
                  })
              }  
            </>
        )
    }
}

export default withAuth0 (Home)
