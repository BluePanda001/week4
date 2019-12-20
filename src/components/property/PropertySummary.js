// created to make things modular for each property to add to the list

import React from 'react'
const ProjectSummary=({property})=>{
    const id= property.id;
    console.log(id)
    const image= "img/"+id+".jpg";
    console.log({image})
   
    return(
        
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{property.title}</span>
                    <p>{property.content}</p>
                    <img src={image} alt=""/>
                    <p className="grey-text">Posted by Panda</p>
                    <p className="grey-text">18th November 2019</p>
                </div>
        </div>
    )
}
export default ProjectSummary