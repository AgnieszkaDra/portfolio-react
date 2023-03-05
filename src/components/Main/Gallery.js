/* eslint-disable jsx-a11y/alt-text */
import React from "react";


class Gallery extends React.Component {
    render(){
         const containerGallery = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
       }
       const img = {
        width: '100%',
        height: '100%'
       }
    
    return <section style={containerGallery}>
            <div> <img src={require('./zd.jpg')} style={img}/></div>
           <div><img src={require('./zd.jpg')} style={img}/></div>
            
        </section>
    }
}

export default Gallery
