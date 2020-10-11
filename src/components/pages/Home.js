import React, { Fragment, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'

const Home = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <h1>Home Page</h1>
        </Fragment>
    )
}

export default Home