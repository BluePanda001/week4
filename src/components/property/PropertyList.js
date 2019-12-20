import React from 'react'
import PropertySummary from './PropertySummary'
import {Link} from 'react-router-dom'

const ProjectList=({properties})=>{
    return(
        <div className="project-list section">
            {properties && properties.map(property=>{
                return(                    
                    <Link to={'/property/'+property.id}>
                    <PropertySummary property={property} key={property.id}/>
                    </Link>
                )
            })}           
        </div>
    )
}
export default ProjectList