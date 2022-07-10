import React,{createContext, useContext, useState, useEffect} from "react";

const Context = createContext();

export const StateContext = ({children}) => {
    const [admin, setAdmin] = useState(window.localStorage.getItem('admin'))
    const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem('currentUser'))  )
    const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem('users3')) || [])
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ username, setUsername] = useState('')
    const [state, setState] = useState(window.localStorage.getItem('state'))
    const [candidates, setCandidates] = useState(JSON.parse(window.localStorage.getItem('candidateList')) || [])
    const [totalVotes,setTotalVotes] = useState(window.localStorage.getItem('totalVotes') || 0)
    return (
        <Context.Provider 
        value = {{
            state,
            setState,
            candidates,
            setCandidates,
            totalVotes,
            setTotalVotes,
            admin,
            setAdmin,
            email,
            setEmail,
            password,
            setPassword,
            username,
            setUsername,
            users,
            setUsers,
            currentUser,
            setCurrentUser,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);