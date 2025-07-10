import { createContext,useEffect,useState } from "react";
import PRODUCT from '../../shop-data'
import {getCatagoriesAndDocuments} from '../../utils/firebase.utils'

export const CatagoriesContext = createContext({
    catagoriesMap : {},
})

export const CatagoriesProvider = ({children}) =>{
    const [catagoriesMap ,setCatagoriesMap  ] = useState({})
    useEffect(()=>{
        const getCatagoriesMap = async ()=>{
            const categoryMap = await getCatagoriesAndDocuments();
            console.log(categoryMap)
            setCatagoriesMap(categoryMap)

        };
        getCatagoriesMap(); 
        
    },[])
    const value = {catagoriesMap ,setCatagoriesMap}
    return(
        <CatagoriesContext.Provider value={value} >{children}</CatagoriesContext.Provider>
    )
}