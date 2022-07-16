import React, {useState, useContext, useCallback} from "react"
import {MessageContext} from "../context/message"

// const baseUrl = "http://localhost:3000/api"
const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const {setMessage} = useContext(MessageContext)

    const getCurrentUser = useCallback(async () => { 
        try {
            const resp = await fetch("/api/me")
             if (resp.status === 200 || resp.status === 304) {
                const data = await resp.json()
                setUser(data)
             } else {
                const errorObj = await resp.json()
                setMessage(errorObj.error)
             }
        } catch (e) {
            setMessage(e.message)
        }
    }, [setMessage])

    const login = async (userInfo) => {
        try {
            const resp = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            if (resp.status === 202) {
                const data = await resp.json()
                setUser(data)
                return true
            } else {
                const errorObj = await resp.json()
                setMessage(errorObj.error)
                return false
            }

        } catch(e) {
            setMessage(e.message)
        }
    }
    const signup = async (userInfo) => {
        try {
            const resp = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            if (resp.status === 201) {
                const data = await resp.json()
                setUser(data)
            } else {
                debugger
                const errorObj = await resp.json()
                setMessage(errorObj.error)
            }

        } catch(e) {
            setMessage(e.message)
        }
    }
    const signout = async () => { 
        try {
            const resp = await fetch("/api/logout", {
                method: "DELETE"
            })
            if (resp.status === 201) {
                setMessage("You have been logged out")
                setUser(null)
                return true
            }
        } catch(e) {
            setMessage(e.message)
            return false
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser,  getCurrentUser, login, signup, signout }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }