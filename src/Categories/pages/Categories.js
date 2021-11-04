import React from 'react'
import {NavBar} from '../../nav-bar/NavBar'
import { Sentence } from '../components/Sentence'
import Card  from '../components/Card'
//import '../components/styles/Card.css'




export const Categories = () => {
    return (
        <div>
            <NavBar/>
            <Sentence/>
            <div>
                <Card/>
            </div>
        </div>
    )
}


