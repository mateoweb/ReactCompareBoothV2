import React, { Component } from 'react'
import ShopResume from './ShopResume'

class ShopPreview extends Component {
 
    render() { 
        console.log(this.props.FilteredResults)
        return ( 
            <div>
                <ShopResume/>
            </div>
         );
    }
}
 
export default ShopPreview ;