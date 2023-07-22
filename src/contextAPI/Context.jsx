import React, { createContext, useState } from 'react'

const AllContexts = createContext()
const Context = ({children }) => {
    // display form
    const [displayForm, setdisplayForm] = useState(false);

    // users data
    const [usersData, setUsersData] = useState([]);

    // curr edit user
    const [currEditUser, setCurrEditUser] = useState(null);

    // value obj
    const contextsObj = {
        displayForm, setdisplayForm,
        usersData, setUsersData,
        currEditUser, setCurrEditUser
    }

    return (
        <AllContexts.Provider value={contextsObj}>
            {children}
        </AllContexts.Provider>
    )
}

export default AllContexts
export { Context }
