import React, { useState } from 'react'

import Movies from './Movies'
import Theater from './Theater.jsx'
import './Admin.css'

function Admin() {

    const [tab, setTab] = useState('movies')

    return (
        <>
            <button onClick={() => setTab('movies')}>Movies</button>
            <button onClick={() => setTab('theater')}>Theater</button>

            <div className='admin-main-container'>
                {tab === 'movies' ? (
                    <Movies />
                ) : (
                    <Theater />
                )}
            </div>
        </>
    )
}

export default Admin