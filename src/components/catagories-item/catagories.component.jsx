import React from 'react'
import Categoryitem from '../category-item/category-item'
import { Link } from 'react-router-dom'


const Catagories = ({ catagory }) => {
    return (
        <div className='categories-container'>
            
            {catagory.map((catagory) => {
                return (
                    
                    <Categoryitem key={catagory.id} category={catagory} />


                )
            })}
            
        </div>
    )
}

export default Catagories
