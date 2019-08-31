import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import store from '../../redux/store'; 
import './Wizard.css';

export default class Wizard extends Component {
    constructor() {
        super()
        
        const reduxState = store.getState(); 

        this.state = {
            name: reduxState.name, 
            address: reduxState.address, 
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
            // name: '', 
            // address: '', 
            // city:  '',
            // state: '',
            // zipcode: 0
        }
    };

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState(); 
            this.setState({
                name: reduxState.name, 
                address: reduxState.address, 
                city: reduxState.city,
                state: reduxState.state,
                zipcode: reduxState.zipcode
            })
        })
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }; 

    render() {
        return (
            <div className='wizard-container'>
                <div>
                    <div>Add New Listing</div>
                    <Link to='/'><span onClick={() => store.dispatch({type:'CANCEL'})} className='button-span'>Cancel</span></Link>
                </div>
                <input placeholder='property name' name='name' onChange={this.handleInputChange} value={this.state.name}></input>
                <input placeholder='address' name='address' onChange={this.handleInputChange} value={this.state.address}></input>
                <input placeholder='city' name='city' onChange={this.handleInputChange} value={this.state.city}></input>
                <input placeholder='state' name='state' onChange={this.handleInputChange} value={this.state.state}></input>
                <input placeholder='zipcode' name='zipcode' onChange={this.handleInputChange} value={this.state.zipcode}></input>
                <Link to='/wizard/step2'><span onClick={() => store.dispatch({type: 'ADD_STEP1', payload:{componentState: this.state}})} className='button-span'>Next Step</span></Link>
            </div>
        )
    }
};
