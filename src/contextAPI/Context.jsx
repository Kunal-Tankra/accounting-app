import React, { createContext, useState } from 'react'

const AllContexts = createContext()
const Context = ({children }) => {
    // display form
    const [displayForm, setdisplayForm] = useState(false);

    // value obj
    const contextsObj = {
        displayForm, setdisplayForm
    }

    return (
        <AllContexts.Provider value={contextsObj}>
            {children}
        </AllContexts.Provider>
    )
}

export default AllContexts
export { Context }
