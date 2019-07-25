import React, { Component } from 'react'

class Shops extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                 {this.props.shops.map((detail, index) => {
               
               return <React.Fragment key={index}>
                   <h1>{detail.nom}</h1><h2>A partir de: {detail.startPrice} €</h2>
                   
               
               <h3>Présentation</h3>
               <p>{detail.resume}</p>
               <a href="#top">{detail.website}</a>
               </React.Fragment> 
           })}

            </React.Fragment>
          )
    }
}
 
export default Shops;