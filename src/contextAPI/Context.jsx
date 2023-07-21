import React, { createContext } from 'react'

const AllContexts = createContext()
const Context = ({children }) => {
    // value obj
    const contextsObj = {
        name: "kunal"
    }

    return (
        <AllContexts.Provider value={contextsObj}>
            {children}
        </AllContexts.Provider>
    )
}

export default AllContexts
export { Context }
