// component that houses the project details
// import React from 'react'
import React, { Component } from 'react'
//import connect to connect to the redux state
import {connect} from 'react-redux'
//to compose the state and the database together (in video 20)
import {compose} from 'redux'
import propertyReducer from '../../store/reducers/propertyReducer';
import { render } from 'react-dom';
import pic from './1.jpg'
//const PropertyDetails=(props)=>
class PropertyDetails extends Component{   
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }   
    
    render(){  
    return(            
        <div className="row">
                <div className="col s15 m8">
                    <div className="container section project-details">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title"></span>
                                {/* this has hard coded data, as the project is not linked to a databse yet */}
                                <h5 className='red-text'>R 10 million </h5>
                                <h5 className='blue-text'>Constantia </h5>
                                <img src={pic} alt=""/>
                                <p>Description:</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel earum aliquam nam? Reprehenderit excepturi rerum debitis hic laborum adipisci accusamus laudantium doloribus eligendi. Nesciunt sequi enim, esse voluptate aliquam praesentium?</p>
                            </div>
                            <div className="card-action grey lighten-4 grey-text">
                                <div>Posted By Panda</div>
                                {/* <p>Property ID-</p> */}
                                <div>18 November 2019</div>
                            </div>
                        </div>
                    </div>                       
                </div>  
                <div className="col s5 m4">
                <div className="container section project-details">
                        <div className="card z-depth-0 ">
                            <div className=" form card-content">
                                <form onSubmit={this.handleSubmit} className="white">
                                    <h5 className="grey-text text-darken-3">Contact </h5>
                                    <div className="input-field">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="email" id="email" />
                                    </div>                                    
                                    <div className="input-field">
                                        <label htmlFor="firstName">Your Name</label>
                                        <input type="text" id="firstName" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="number">Your Number</label>
                                        <input type="text" id="number" />
                                    </div>
                                    <div className="input-field">
                                        <textarea htmlFor="message">Write us a message</textarea>                                        
                                    </div>
                                    <div className="input-field">
                                        <button className="btn blue lighten-4 z-depth-0 black-text"><strong>Send Message</strong></button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>       
                    
                    
                </div>                  
        </div>        
    )  
    }
}

export default PropertyDetails
