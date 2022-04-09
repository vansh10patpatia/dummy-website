import React  from "react";


const Navbar=()=>{
    return(
        <>
        <header className="sc-jeraig bgUvCU kirk-topBar">
            <div className="kirk-topBar-inner">
                <div className="kirk-topBar-left">
                    <a className="flex items-center mx-s large:ml-none large:mr-xl" title="Go to BlaBlaCar homepage" target="_self" rel="" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1499.7 294.6" width="162" height="32"><path fill="#054752" d="M289 150.2c-7.4-44.6-49.6-74.6-94-67l13-74.7L160.3 0c-4 9-22 50-30.7 96 17.7 12 30.7 31 34.6 54 4 24.3-3 48-17.6 65.6 3.6 4.4 7.7 8.4 12.3 12 18.5 14.6 41 20.3 63 16.6 44.7-7.4 74.7-49.6 67-94z"></path><path fill="#2dbeff" d="M128.8 101.2l1-5c-17-11.6-38-16.8-59.8-13.2L83 8.4 35.4 0C31.2 9.3 12 53 3.8 101c-6.6 38.8-6.3 80.4 14 109.7 4.5 6.3 9.8 12 16.2 17 18.6 14.6 41.2 20.3 63.2 16.6 20.2-3.3 37.3-14 49.4-28.5l-3.8-5c-20.4-29.2-20.7-70.8-14-109.5z"></path><path fill="#9ef769" d="M164.3 150.2c-4-23-17-42-34.6-54l-1 5c-6.5 38.8-6.2 80.4 14.2 109.7l3.7 5c14.6-18 21.8-41.6 17.6-66z"></path><path fill="#054752" d="M1249 228h-28.4c-1 0-1.7.5-2 1.3-4 10.6-9.6 19.4-17.6 25.6-8 6-18.3 9.6-31.7 9.6-18.3 0-33-8-43-21.4-10-13.5-15.6-32.2-15.6-53.6 0-21.6 5.5-40.3 15.6-53.6 10-13.3 24.8-21.3 43-21.3 13.3 0 23.5 3.5 31.5 9.6 8 6.2 13.5 15 17.6 25.3.3.8 1 1.4 2 1.4h28.5c.4 0 1-.2 1.3-.6.4-.3.6-.8.6-1.4v-.5c-4.5-19.2-13.8-35-27.6-46S1191.4 85 1169 85c-26 0-49 10.7-65.5 29-16.5 18.4-26.5 44.5-26.5 75.8 0 31.3 10 57.5 26.5 75.8 16.5 18.5 39.5 29 65.6 29 22.4 0 40.6-6.2 54.5-17.3 13.8-11 23.2-27 27.5-46.5v-.5c0-.6-.2-1-.6-1.5-.2-.3-.8-.5-1.4-.5zm249.3-84.2c-2-.4-4.8-.8-8.7-.8-3.4 0-7.6.3-12.4 1.2-4 .8-8.3 2.4-12.3 4.6-4 2.2-8 5.2-11.6 8.8-2 2-4 4.5-5.8 7.3l-1.3 2v-19.4c0-1.2-1-2.2-2-2.2H1417c-1 0-2 1-2 2.2v142c0 1 1 2 2 2h27.4c1.2 0 2.2-1 2.2-2v-69c0-8 1-14.8 2.7-20.4 1.8-5.6 4.5-10 8-13.4 3.7-3.4 7.8-6 12.6-7.7 5.6-2 11.7-2.6 17-2.6 4 0 8 .4 10.3.8h.3c1.2 0 2-.8 2-2V146c.3-1-.4-2-1.5-2.2zM909 84.8h-.5L881 89.6c-1 .2-2 1-2 2v197.8c0 1.2 1 2.2 2.3 2.2H909c1 0 2-1 2-2.2V87c0-1.2-1-2.2-2.3-2.2zm-56.7 117.4c-4-8.2-9.6-15.2-16.5-21l-2-1.5c-3-2.3-6.3-4.4-9.8-6l-1-.5.7-.7c3.2-3.7 6-8 8-12.6 3-6.7 4.5-13.6 4.5-20.8 0-7.8-1.6-15-4.6-22-3-7-7.3-12.8-12.7-17.8-5-4.6-11-8.2-17.8-10.8-6.8-2.6-15.3-4-25.3-4h-60.6c-1.2 0-2.2 1-2.2 2.3v202.5c0 1.2 1 2.2 2.2 2.2H790c10.7 0 19.6-1.2 26.8-3.6 7-2.4 13.5-6 19-10.5 6.8-5.7 12.4-12.8 16.5-21 1-2 1.7-3.7 2.4-5.5l.3-.8.5-1.4c2-6.2 3.2-12.7 3.2-19.5-.2-9.8-2.3-19-6.5-27.2zm-107-87h25.4c8 0 14 .7 18 2 3.8 1.5 6.8 3.5 9 6 4.3 4.8 6.5 10.4 6.5 17 0 6.4-2 12-6.5 16.8-2.2 2.5-5 4.5-9 6-2.8 1-7 1.6-12 2H745v-49.8zm78 125.6c-1.6 4-3.8 7.4-6.6 10.4-3.2 3-7 5.6-11.7 7.4-4.7 1.7-11.6 2.7-20.8 2.7h-39v-65.7h39c9.2 0 16 1 20.7 2.7 4.5 1.8 8.4 4.3 11.5 7.4 2.8 3 5 6.4 6.7 10.2 1.7 3.7 2.5 8 2.5 12.3 0 4.5-.8 8.7-2.5 12.6zm218-83.6c-10.6-9.7-25.2-14.5-43.4-14.5-16.4 0-29.8 4-40 12-9 6.7-15.5 15.3-19 25.5-.4 1 .3 2.3 1.5 2.5l25.8 4.5c1 .2 1.7-.3 2-1 5.3-11.7 15.2-17.4 29.8-17.4 10 0 17.6 2.7 23 8.2 5.4 5.5 8 12.8 8 22v5.2c-13.5-4-26.4-6-38.4-6-17 0-31.2 4.2-42.5 12.8-11.2 8.6-17 20.7-17 36.2 0 14.8 5.3 26.4 15.6 34.8 10.3 8.4 22.7 12.6 37.3 12.6 18.6 0 34-5.4 45.2-16.6v11.2c0 1.4 1.2 2.5 2.5 2.5h23.8c1.3 0 2.4-1 2.4-2.4V197c-.3-17-5.7-30.2-16.5-39.8zm-24.2 100c-8 6.7-17.7 10-29.3 10-8.5 0-15-2-19.6-5.8-4.4-3.8-6.7-9-6.7-15.6 0-7.2 3-12.6 8.6-16.2 5.6-3.6 13-5.5 22-5.5 11.3 0 23.7 2 37 6 0 11.7-4 20.6-12 27zM538 84.8h-.4L510 89.6c-1 .2-2 1-2 2v197.8c0 1.2 1 2.2 2.3 2.2H538c1 0 2-1 2-2.2V87c0-1.2-1-2.2-2.2-2.2zM481 202.2c-4-8.2-9.4-15.2-16.3-21l-2-1.5c-3-2.3-6.3-4.4-9.8-6l-1-.5.7-.7c3.2-3.7 6-8 8-12.6 3-6.7 4.5-13.6 4.5-20.8 0-7.8-1.5-15-4.5-22s-7.3-12.8-12.7-17.8c-5-4.6-11-8.2-17.6-10.8-6.8-2.6-15.3-4-25.3-4h-60.5c-1.2 0-2.2 1-2.2 2.3v202.5c0 1.2 1 2.2 2.2 2.2H419c10.7 0 19.6-1.2 26.8-3.6 7-2.4 13.5-6 19-10.5 6.8-5.7 12.4-12.8 16.5-21 1-2 1.7-3.7 2.4-5.5l.3-.8c0-.4.2-1 .4-1.4 2-6.2 3.2-12.7 3.2-19.5-.2-9.8-2.3-19-6.5-27.2zm-107-87h25.6c8 0 14 .7 18 2 3.8 1.5 6.8 3.5 9 6 4.3 4.8 6.5 10.4 6.5 17 0 6.4-2 12-6.5 16.8-2.2 2.5-5 4.5-9 6-2.8 1-7 1.6-12 2H374zm78.3 125.6c-1.7 4-4 7.4-6.7 10.4-3.2 3-7 5.6-11.7 7.4-4.7 1.7-11.6 2.7-20.8 2.7h-39v-65.7h39c9.3 0 16.2 1 20.8 2.7 4.7 1.8 8.6 4.3 11.7 7.4 2.8 3 5 6.4 6.7 10.2 1.7 3.7 2.5 8 2.5 12.3 0 4.5-1 8.7-2.6 12.6zm218-83.6c-10.7-9.7-25.3-14.5-43.5-14.5-16.3 0-29.7 4-40 12-9 6.7-15.4 15.3-19 25.5-.3 1 .4 2.3 1.6 2.5l25.7 4.5c1 .2 2-.3 2.3-1 5.2-11.7 15-17.4 29.7-17.4 9.7 0 17.4 2.7 22.8 8.2 5.4 5.5 8.2 12.8 8.2 22v5.2c-13.7-4-26.6-6-38.6-6-17 0-31.2 4.2-42.5 12.8-11.5 8.6-17 20.7-17 36.2 0 14.8 5 26.4 15.3 34.8 10.3 8.4 22.7 12.6 37.3 12.6 18.7 0 34-5.4 45.3-16.6v11.2c0 1.4 1 2.5 2.3 2.5H684c1.4 0 2.5-1 2.5-2.4V197c-.3-17-5.6-30.2-16.4-39.8zm-24.4 100c-8 6.7-18 10-29.5 10-8.5 0-15-2-19.6-5.8-4.6-3.8-7-9-7-15.6 0-7.2 3-12.6 8.7-16.2 5.7-3.6 13-5.5 22-5.5 11.4 0 23.8 2 37 6 .2 11.7-3.8 20.6-11.8 27zm730.6-100c-10.7-9.7-25.3-14.5-43.5-14.5-16.2 0-29.6 4-40 12-9 6.7-15.3 15.3-19 25.5-.2 1 .5 2.3 1.7 2.5l25.8 4.5c1 .2 1.7-.3 2-1 5.3-11.7 15.2-17.4 29.8-17.4 9.8 0 17.5 2.7 23 8.2 5.3 5.5 8 12.8 8 22v5.2c-13.6-4-26.5-6-38.5-6-17 0-31.2 4.2-42.5 12.8-11.3 8.6-17 20.7-17 36.2 0 14.8 5.2 26.4 15.5 34.8 10.3 8.4 22.7 12.6 37.3 12.6 18.8 0 34-5.4 45.4-16.6v11.2c0 1.4 1 2.5 2.4 2.5h23.8c1.3 0 2.4-1 2.4-2.4V197c-.4-17-5.8-30.2-16.5-39.8zm-24.5 100c-8 6.7-17.6 10-29.2 10-8.5 0-15-2-19.6-5.8-4.4-3.8-6.7-9-6.7-15.6 0-7.2 3-12.6 8.6-16.2 5.7-3.6 13-5.5 22-5.5 11.4 0 24 2 37 6 0 11.7-4 20.6-12 27z"></path>
                        </svg>
                    </a>
                </div>
                <div className="kirk-topBar-center"></div>
                <div className="kirk-topBar-right">
                    <a className="flex items-center mx-s large:ml-none large:mr-xl" title="" target="_self" rel="" href="/search-car-sharing">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ksdxgE dNZZtF mr-m" width="24" height="24" aria-hidden="true">
                            <g fill="none" stroke="#00AFF5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                <line x1="22" y1="22" x2="16.4" y2="16.4"></line>
                                <circle cx="10" cy="10" r="9"></circle>
                            </g>
                        </svg>
                        Search
                    </a>
                    <a className="flex items-center mx-s large:ml-none large:mr-xl" title="" target="_self" rel="" href="/offer-seats">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ksdxgE dNZZtF mr-m" width="24" height="24" aria-hidden="true">
                            <path stroke-width="0" fill="#00AFF5" fill-rule="evenodd" d="M1.14 11.5a10.36 10.36 0 1120.72 0 10.36 10.36 0 01-20.72 0zM11.5 0a11.5 11.5 0 100 23 11.5 11.5 0 000-23zm.57 6.53a.57.57 0 00-1.14 0v4.4h-4.4a.57.57 0 100 1.14h4.4v4.4a.57.57 0 101.14 0v-4.4h4.4a.57.57 0 000-1.14h-4.4z"></path>
                        </svg>
                        Publish a ride
                    </a>
                    <div className="sc-hiwPVj gtMCAh kirk-dropdownButton kirk-dropdownButton--open flex items-center mx-m">
                        <button aria-label="Connect" aria-controls="connect-menu" aria-expanded="true" type="button">
                            <div className="sc-fWCJzd ctNlLp kirk-avatar--image topBar-avatar mr-l kirk-avatar">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==" alt=""/>
                            </div>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-ksdxgE eqtwsd" width="24" height="24" aria-hidden="true">
                                <polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6" transform="rotate(90 12 12)"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <aside class="sc-eJwWfJ djHSaA kirk-drawer kirk-drawer--open" style={{display:'block'}}>
            <div class="kirk-drawer-scrollableContent" >
                <nav class="bg-white user-menu" id="connect-menu" role="menu">
                    <ul class="sc-gGCDDS bZCmSV kirk-items-list">
                        <li class="kirk-items-list-item">
                            <a type="button" class="kirk-item kirk-item--clickable sc-Galmp kNDdlo kirk-item-choice user-menu-item" href="/login">
                                <span class="kirk-item-leftWrapper">
                                    <span class="kirk-item-leftText">
                                        <span class="kirk-text kirk-text-title sc-faUpoM gHhpVx" >Log in</span>
                                    </span>
                                </span>
                                <span class="kirk-item-rightAddon">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ksdxgE eqtwsd" width="24" height="24" aria-hidden="true">
                                        <polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li class="kirk-items-list-item">
                            <a type="button" class="kirk-item kirk-item--clickable sc-Galmp kNDdlo kirk-item-choice user-menu-item" href="/register">
                                <span class="kirk-item-leftWrapper">
                                    <span class="kirk-item-leftText">
                                        <span class="kirk-text kirk-text-title sc-faUpoM gHhpVx" >Sign up</span>
                                    </span>
                                </span>
                                <span class="kirk-item-rightAddon">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ksdxgE eqtwsd" width="24" height="24" aria-hidden="true">
                                        <polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6">
                                        </polyline>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        </>
    )
}

export default Navbar;