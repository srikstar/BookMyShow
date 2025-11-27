import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { user_api } from './APIs/auth.api'
import { setUserData } from './redux/auth.slice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



function Home() {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    
    useEffect(() => {
        const getUserData = async () => {
            try {
                const user = await user_api()
                if (user) {
                    dispatch(setUserData(user?.user))
                }
                console.log(user?.user)
            } catch (error) {
                console.log(error?.response?.data)
            }
        }
        getUserData()
    }, [dispatch])


    return (
        <>
            <section className='navbar row'>
                <div className="navbar-main row-sb">
                    <h3>Logo</h3>
                    <h3><Link to='/profile'>{user?.role}</Link></h3>
                </div>
            </section>
        </>
    )
}

export default Home