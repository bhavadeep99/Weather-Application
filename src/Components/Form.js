import React, { Component } from 'react';
import { Button } from 'reactstrap';



class Form extends Component {
        
    render() { 
        return ( 
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city" />
                <input type="text" name="country" placeholder="country" />
                <Button color="success"> GET WEATHER</Button>{' '}
                
            </form>
         );
    }
}
 
export default Form;