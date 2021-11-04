import React from 'react'
import {NavBar} from '../../nav-bar/NavBar'
import { Sentence } from '../components/Sentence'
import Card  from '../components/Card'
//import '../components/styles/Card.css'




export const Home = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Sentence/>
                <Card/>
            </div>
            
            
        </div>
    )
}


