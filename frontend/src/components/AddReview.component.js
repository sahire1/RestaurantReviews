import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button, Container, Table } from 'reactstrap';

export default class AddReview extends Component {
    
    constructor(props) {
    super(props);
    this.onChangeMessage=this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {  msg:''  }

    }


  onChangeMessage(e) {
    this.setState({
      msg: e.target.value
    })
  }


 onSubmit(e) {
    e.preventDefault();
    const review={
                review:this.state.msg

    }
    console.log(review);

    axios.post('http://localhost:5000/restaurants/reviews/'+this.props.match.params.id,review)
    .then(res => {
      console.log(res.data);
    });
    window.location = '/';

 }

render() {
     return(
         <div>
            <h3>Create New Reply</h3>
  
      <form onSubmit={this.onSubmit}>
      
        <div className="form-group"> 
          <label>Reply: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.msg}
              onChange={this.onChangeMessage}>
          </input>
        </div>

        <div className="form-group">
          <input type="submit" value="Create new Reply" className="btn btn-primary" />
        </div>
      </form> 
         </div>
     )
 }

}