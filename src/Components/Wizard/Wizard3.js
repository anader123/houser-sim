import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../redux/store';  
import './Wizard.css';
import axios from 'axios';

export default class Wizard3 extends Component {
    constructor() {
        super(); 

        const reduxState = store.getState(); 

        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    };

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState(); 
            this.setState({
                mortgage: reduxState.mortgage, 
                rent: reduxState.rent
            })
        })
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }; 

    // FIXME: 
    // Not sure how to import the action so that it can be called. 
    // createHouse = () => {
    //     axios.post('/api/house', {...store.get()}
    //         .then(() => {

    //         }) 
    // }

    render() {
        return (
            <div className='wizard-container'>
                <div>Wizard 3</div>
                <Link to='/'><span className='button-span'>Cancel</span></Link>
                <input placeholder='monthly mortgage amount' name='mortgage' onChange={this.handleInputChange} value={this.state.mortgage}/>
                <input placeholder='desired monthly rent' name='rent' onChange={this.handleInputChange} value={this.state.rent}/>
                <Link to='/wizard/step2'><span onClick={() => store.dispatch({type: 'ADD_STEP3', payload:{componentState: this.state}})} className='button-span'>Previous Step</span></Link>
                <span>Complete</span>    
            </div>
        )
    }
}


