import React, {createContext, useReducer} from "react";
import StoreReducer, {initialStore} from '../Reducer/StoreReducer'




const Store = ({children}) => {
    const [store, dispatch] = useReducer(StoreReducer,initialStore);
    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
};

export const StoreContext = createContext();
export default Store;