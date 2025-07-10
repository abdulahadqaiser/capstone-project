import React, { useContext } from 'react'

import { CatagoriesContext } from '../../components/context/catagories.context'


import CategoryPreview from '../../components/category-preview/category-preview.component'
const CategoriesPreview = () => {

  const { catagoriesMap } = useContext(CatagoriesContext)
  return (
    <>     
       {
          Object.keys(catagoriesMap).map(title =>{ 
            const products = catagoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products}/>                   
            })
        }
      

    </>
  )
}

export default CategoriesPreview;