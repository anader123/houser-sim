import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import store from '../../redux/store'; 
import './Wizard.css';


export default class Wizard2 extends Component {
    constructor() {
        super();

        const reduxState = store.getState(); 
        
        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState(); 
            this.setState({
                img: reduxState.img
            })
        })
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }; 

    render() {
        return (
            <div className='wizard-container'>
                <div>Wizard 2</div>
                <Link to='/'><span className='button-span' onClick={() => store.dispatch({type:'CANCEL'})}>Cancel</span></Link>
                <input placeholder='image url' name='img' onChange={this.handleInputChange} value={this.state.img}/>
                <Link to='/wizard/step1'><span onClick={() => store.dispatch({type: 'ADD_STEP2', payload:{componentState: this.state}})} className='button-span'>Previous Step</span></Link>
                <Link to='/wizard/step3'><span onClick={() => store.dispatch({type: 'ADD_STEP2', payload:{componentState: this.state}})} className='button-span'>Next Step</span></Link>
            </div>
        )
    }
}

