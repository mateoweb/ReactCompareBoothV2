import React, { Component } from 'react'

class ShopDetails extends Component {
    constructor(props){
      super(props)
      this.setState({
        shop:[]
      }
      )
      
    }
  render() { 
     
      console.log("Props shops: " ,this.props.shops)
      const id = this.props.match.params.id;
      console.log("id: ", id)
      const data = this.props.shops || {}
      console.log("data: ", data)
      const shop = data.find(s => s.id == id)
      console.log("const shop = data.find(...): ", shop)
      
      return (
  <div>

{
 shop ? <div>{shop.nom}</div> : null
}

{
  shop ? <div>{shop.id}</div> : null
 }
 {
 shop ? <div>{shop.startPrice}</div> : null
}
  </div>
)    
}}
 
export default ShopDetails




/* <div className="container">

        
<div className="row">
  <div className="col-4">Logo</div>
  <div className="col-8">
      <h2>Titre</h2>
      <p>Notation</p>
  </div>
</div>
<div className="row">
  <div className="col">
      <h3>Titre2</h3>
      <p>Website</p>
  </div>
  <div className="col">
      <h2>Services</h2>
      <p>Rappel des services</p>
  </div>
</div>
<div className="row">
<div className="col">
      <h2>Présentation</h2>
      <p>Résume</p>
  </div>
</div>
</div> */

// class ShopDetails extends Component {
//   componentDidMount(){

//     const id= window.location.pathname.replace("/shopDetail/", "");

//     console.log(this.props.match.params)
//     console.log(id)

//   }

//   render() {

  // const id = window.location.pathname.replace("/shopDetail/", "");
  // const data = this.props.shops
  // console.log(id, data)
  //     return ( 
  //       <div>
  
  //       </div>
  //      );
  //   }

  //const id = this.props.location.pathname("/shopDetail/", "");
