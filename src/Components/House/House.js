import React, { Component } from 'react';
import './House.css'; 

export default class House extends Component {
    render() {
        const { house } = this.props;
        const { id } = this.props.house
        return (
            <div className='house-container'>
                <br/>
                <img className='house-image' alt='house' src={`${house.img}`} />
                <div className='address-container'>
                    <div>Property Name: {house.name}</div>
                    <div>Address: {house.address}</div>
                    <div>City: {house.city}</div>
                    <div>State: {house.state}</div>
                    <div>Zip: {house.zip}</div>
                </div>
                <div className="morg-container">
                    <div>Monthly Mortgage: {house.mortgage}</div>
                    <div>Desired Rent {house.rent}</div>
                </div>
                <div className='delete-container'>
                    <span onClick={() => this.props.deleteHouse(id)}>X</span>  
                </div>
            </div>
        )
    }
}
