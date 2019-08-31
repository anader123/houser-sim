import React, { Component } from 'react'; 
import House from '../House/House'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import './Dashboard.css';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses(); 
    }

    getHouses = () =>  {
        axios.get('/api/houses')
        .then(response => {
            this.setState({
                houses: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    render() {
        const {houses} = this.state; 
        const mappedHouses = houses.map((house, index) => {
            return(
                <House key={index} house={house} />
            )
        })
        return (
            <div className='dashboard-container'>
                <br/>
                <span className='dashboard-title'>Dashboard</span>
                <br/>
                <Link to='/wizard/step1'><span className='button-span'>Add New Property</span></Link>
                {mappedHouses}
            </div>
        )
    }
}
