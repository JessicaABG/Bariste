import React from 'react'
import {Link} from 'react-router-dom'

export default function Layout(props) {
    const { children, currentUser, handleLogout } = props;
    return (
        <div>
            <header>
                <h1>Bariste</h1>
                {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'> Login/SignUp </Link>
        )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/crafts'>craft gallery</Link>
            <Link to='/crafts/new'>new craft submission</Link>
          </div>
        )}
            </header>
            {children}
        </div>
    )
}
