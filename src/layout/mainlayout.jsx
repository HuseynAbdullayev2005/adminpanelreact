import React from 'react'


import { Outlet, Link } from "react-router-dom";
function Mainlayout() {
    return (
        <div>
            <nav>
                <div className="navbar_text">
                    <i class="fa-solid fa-bolt"></i>
                    <h4>Globex Corporation</h4>
                </div>
                <ul>
                    <li>
                        <i class="fa-regular fa-bell"></i>
                    </li>

                    <li>
                        <i class="fa-regular fa-user"></i>
                    </li>
                </ul>
            </nav>


            <div class="sidebar">

                <ul className='sidebar_menu'>
                    <li>
                        <i class="fa-solid fa-gauge"></i>
                        <Link className="nav_link" to="/">Dashboard</Link>
                    </li>

                    <li>
                        <i class="fa-regular fa-calendar"></i>
                        <Link className="nav_link" to="/basketpage">Calendar</Link>
                    </li>
                    <li>
                        <i class="fa-solid fa-chess-board"></i>
                        <Link className="nav_link" to="/basketpage">Scrumboard</Link>
                    </li>
                    <li>
                        <i class="fa-regular fa-building"></i>
                        <Link className="nav_link" to="/basketpage">Companies</Link>
                    </li>
                    <li>
                        <i class="fa-solid fa-users"></i>
                        <Link className="nav_link" to="/basketpage">Contacts</Link>
                    </li>
                    <li>
                        <i class="fa-solid fa-book"></i>
                        <Link className="nav_link" to="/basketpage">Quotes</Link>
                    </li>
                    <li>
                        <i class="fa-solid fa-crown"></i>
                        <Link className="nav_link" to="/basketpage">Administraion</Link>
                    </li>

                </ul>
            </div>

            <div class="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Mainlayout