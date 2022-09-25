import React, { Component } from 'react'
import Counter from './counter'
import Button from 'react-bootstrap/Button';
import '../index.css';
export default class person extends Component {
   
  
    state={
        fullName:"Gédéon NFONGYELE",
        bio:"x", 
        imgSrc:"",
        profession:"Ingénieur Mécatronicien",
        shows:false,
    }
    showHandler=()=>{
        this.setState({
            shows:!this.state.shows
        })
    }
  render() {
    return (
        
        <div>{this.state.shows? <div><img src={this.state.imgSrc} alt="" /><p>{this.state.fullName}</p>
       <p>{this.state.profession}</p>
       <p>{this.state.bio}</p>
       <Counter></Counter>
       
        </div>: <div></div>
        
         }
         
         <style type="text/css">
        {`
    .btn-x{
        background-color: purple;
        color: white;
        border-color:purple;
        transition-duration: 0.4s;
      }
      
      .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
      .btn-x:hover {
          background-color: #d8bfd8; /* a diffrent shade of purple*/
          border-color: #d8bfd8;
          color: white;
        }

        
        
    `}
      </style>
      <div className='container'>
      <div className="d-grid gap-2">
      <Button variant="x" size="xxl" onClick={this.showHandler}>
        Show / Hide
      </Button>
      </div>
        </div></div>
    )
  }
}
