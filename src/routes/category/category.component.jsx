import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CatagoriesContext } from '../../components/context/catagories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss'
const Category = () => {
    const {category} = useParams();
    const {catagoriesMap} = useContext(CatagoriesContext)
    const[products ,setProducts] = useState(catagoriesMap[category])
    useEffect(()=>{
        setProducts(catagoriesMap[category])

    },[category,catagoriesMap])
  return (
    <div className='Shop-Category'>
        <h2>{category.toUpperCase()}</h2>
    <div className='Category-container'>
      {
        products&&
         products.map((product)=>{
            return(
                <ProductCard key={product.id} product={product}/>

            )  
            

        })
      }
    </div>
    </div>
  )
}

export default Category
