import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { user_api } from './APIs/auth.api'
import { setUserData } from './redux/auth.slice'
import { movie_get } from './APIs/movies.api'
import { setMovies } from './Redux/movies.slice'


function Home() {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
 
useEffect(() => {
    (async () => {
        try {

            const userRes = await user_api();
            if (userRes?.user) {
                dispatch(setUserData(userRes.user));
            }

            const moviesRes = await movie_get();
            if (moviesRes?.movies) {
                dispatch(setMovies(moviesRes.movies));
            }

        } catch (error) {
            console.error(error?.response?.data || error);
        }
    })();
}, [dispatch]);



    return (
        <>
            <section className='navbar row'>
                <div className="navbar-main row-sb">
                    <h3>Logo</h3>
                    <h3><Link to='/admin'>{user?.role}</Link></h3>
                </div>
            </section>

            {/* <section className='main-display-containers'>
                {user?.role === 'admin' && (
                    <MainAdmin />
                )}
                {user?.role === 'partner' && (
                    <MainPartner />
                )}
                {user?.role === 'user' && (
                    <MainUser />
                )}
            </section> */}
        </>
    )
}

export default Home