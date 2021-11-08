import React from 'react'
import {Link} from 'react-router-dom'

export default function Layout(props) {
    return (
        <div>
            <header>
                <h1>Bariste</h1>
                <Link to='login'>Login/SignUp</Link>
                <hr />
            </header>
            {props.children}
        </div>
    )
}
