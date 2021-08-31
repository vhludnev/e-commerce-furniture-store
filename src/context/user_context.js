import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
	const { /* isAuthenticated,  */loginWithRedirect, logout, user, isLoading, error } = useAuth0()
	const [myUser, setMyUser] = useState(null)
	
	//console.log(window.location.origin + '/cart')
	useEffect(() => {
		//console.log(`user':${user}, isAuthenticated':${isAuthenticated}, isLoading':${isLoading}`)	
		//isAuthenticated ? setMyUser(user): setMyUser(false)
		setMyUser(user)
	}, [user/* isAuthenticated */])

	return (
		<UserContext.Provider value={{ loginWithRedirect, logout, myUser, isLoading, error }} >
			{children}
		</UserContext.Provider>
	)
}
// make sure use
export const useUserContext = () => useContext(UserContext)
