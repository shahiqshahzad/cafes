import React from 'react'

 const Header = () => {
    return (
        
        <div>
        <header id="mad-header" class="mad-header with-bg header-white">
            <div class="mad-header-section--sticky-xl">
                <div class="containerr">
                    <div class="mad-header-items" style={{margin: "0px 45px"}}>
                        <div class="mad-header-item">
                            <a href="/home" class="mad-logo"><img src="images/cafelogo.08337a4b.png" alt="" class="footer-Logo"/></a>
                        </div>
                        <nav class="mad-navigation-container">
                            <ul class="mad-navigation mad-navigation--vertical-sm none-mobile">
                                <li class="menu-item menu-item-has-children"><a href="/home">Home</a></li>
                                <li class="menu-item menu-item-has-children"><a href="/aboutus">About Us</a></li>
                                <li class="menu-item menu-item-has-children mega-menu"><a href="/UserMenu">Menu</a></li>
                                <li class="menu-item menu-item-has-children mega-menu"><a href="/ourSpeciality">Our Speciality</a></li>
                                <li class="menu-item menu-item-has-children mega-menu"><a href="/store">Store</a></li>
                                <li class="menu-item menu-item-has-children mega-menu"><a href="/contactus">Contact US</a></li>
                            </ul>
                            <div class="mad-actions">
                                <div class="mad-item mad-dropdown none-mobile">
                                    <a href="/cart" type="button" class="mad-item-link mad-dropdown-title">
                                        <span class="mad-count">0</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="23" width="23" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></a></div>
                                <div class="none-web"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="white" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: "white" , cursor: "pointer"}}><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg></div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
          </div>
    )
}

export default Header;