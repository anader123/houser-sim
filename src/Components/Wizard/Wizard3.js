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
            rent: reduxState.rent, 
            redux: reduxState
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
    
    clearInputs = () => {
        store.dispatch({type: 'CANCEL'})
    };
    
    createHouse = () => {
        const { redux, rent, mortgage } = this.state; 
        const fullState = {...redux, rent, mortgage}
        axios.post('/api/house', fullState)
            .then(() => {
                this.clearInputs(); 
            }) 
            .catch(err => {
                console.log(err)
            })
        setTimeout(() => {
            this.props.history.push('/')
        }, 150)
    };

    render() {
        return (
            <div className='wizard-container'>

                <Link to='/'><span className='button-span'onClick={() => store.dispatch({type:'CANCEL'})}>Cancel</span></Link>

                <input placeholder='monthly mortgage amount' name='mortgage' onChange={this.handleInputChange} value={this.state.mortgage}/>

                <input placeholder='desired monthly rent' name='rent' onChange={this.handleInputChange} value={this.state.rent}/>

                <Link to='/wizard/step2'><span onClick={() => store.dispatch({type: 'ADD_STEP3', payload:{componentState: this.state}})} className='button-span'>Previous Step</span></Link>

                <span className='button-span' onClick={this.createHouse}>Complete</span>
            </div>
        )
    }
}


