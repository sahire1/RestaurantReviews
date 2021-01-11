
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { Component } from 'react';
import axios from 'axios';


export default class AddRestaurant extends Component{
  constructor(props) {
    super(props);


    this.onChangeName= this.onChangeName.bind(this);
    this.onChangeCuisine = this.onChangeCuisine.bind(this);
    this.onChangeReviews = this.onChangeReviews.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      cuisine: '',
      review: []
      }
  }

 onChangeName=(e:any)=> {
    this.setState({
      name: e.target.value
    })
  };

   onChangeCuisine=(e:any)=> {
    this.setState({
      cuisine: e.target.value
    })
  };

   onChangeReviews=(e:any)=> {
    this.setState({
      reviews: e.target.value
    })
  };

 onSubmit=(e:any) => {
    e.preventDefault();

    const rest = {
      name: this.state.name,
      cuisine: this.state.cuisine,
      review: this.state.review

    }


    console.log(rest);
    //console.log("id"+post._id);
    
axios.post('http://localhost:5000/NewRestaurant', rest)
      .then(res => console.log(res.data)).catch((error)=>{ console.log(error.response); })

    window.location = '/';
  };

    render(){
        return(
           <div>
      <h3>Create New Restaurant Review</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
          </input>
        </div>
        <div className="form-group"> 
          <label>Cuisine: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.Cuisine}
              onChange={this.onChangeCuisine}
              />
        </div>
         <div className="form-group"> 
          <label>Review: </label>
          <input  type="text"
              className="form-control"
              value={this.state.Reviews}
              onChange={this.onChangeReviews}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Add" className="btn btn-primary" />
        </div>
      </form>
    </div >
        )
    }
      
}
