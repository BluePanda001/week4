import React, {Component} from 'react'
import PropertyList from '../property/PropertyList'
import {connect} from 'react-redux'

class Dashboard extends Component{   
    render(){
        
        const {properties}=this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s15 m8">
                        <PropertyList properties={properties}/>
                    </div>                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        properties: state.property.properties
    }
}

export default connect(mapStateToProps)(Dashboard)