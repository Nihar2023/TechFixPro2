import { createContext } from "react";

export const ShopkeeperContext=createContext();

const ShopkeeperContextProvider=(props)=>{
    const value={

    }

    return(
        <ShopkeeperContext.Provider value={value}>{props.children}</ShopkeeperContext.Provider>
    )
}

export default ShopkeeperContextProvider