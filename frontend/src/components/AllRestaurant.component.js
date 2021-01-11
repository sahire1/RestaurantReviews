
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Restaurant = props => (
  <tr>
    <td>{props.rest.name}</td>
    <td>{props.rest.cuisine}</td>
    <td>{props.rest.reviews.map(txt => <p>{txt}</p>)}</td>
   <td>
      <Link to={"/add/"+props.rest._id}>Reply</Link>
    </td>
  </tr>
)

export default class AllRestaurant extends Component{
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
      }
  }
componentDidMount() {
  

      axios.get('http://localhost:5000/Restaurants/')
            .then(response => {
              if (response.data.length > 0) {
                console.log(response.data);
                this.setState({ restaurants: response.data })
                
              }else
              {
                console.log("empty one");
              }
            })
            .catch((error) => {
              console.log(error);
            })

  }

restList(){
   return this.state.restaurants.map(currentrest => {
      console.log("posts are here");
      return <Restaurant rest={currentrest} key={currentrest._id}/>;
    })
}
    render(){
        return(
          <div>
      
        <Container>
         <ListGroup>
        <TransitionGroup className="list">
          <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Replies</th>
            </tr>
          </thead>
          <tbody>
            { this.restList() }
          </tbody>
        </table>
        </TransitionGroup>
      </ListGroup>
        </Container>
      
    </div>

        )
    }
      
}
