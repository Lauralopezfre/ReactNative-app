import {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext); 
}

export const AppProvider = ({children}) => {
    const [usersRemoved,setUsersRemoved] = useState([]);
    return <AppContext.Provider value={{ usersRemoved, setUsersRemoved }}>{children}</AppContext.Provider>
};


export default AppContext;
