import React from 'react'
import { Link, Outlet } from "react-router-dom"

function layout() {
    return (
        <>
        <header>
          <nav>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/clock">Clock task</Link>
              </li>
              <li>
                <Link to="/counter">Counter task</Link>
              </li>
              <li>
                <Link to="/login">Login task</Link>
              </li>
            </ol>
          </nav>
        </header>
        <main><Outlet /></main>
        <footer>Made by Abdullah Mzaien</footer>
        </>
        )
}

export default layout