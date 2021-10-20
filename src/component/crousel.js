import React from 'react'

 const Crousel = () => {
    return (
        <div>
        <div class="carousel slide" style={{height: "85vh"}}>
        <ol class="carousel-indicators">
            <li></li>
            <li class="active"></li>
            <li></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item"><img src="images/2.359f50c7.jpg" class="slider-image"/>
                <div class="carousel-caption">
                    <div class="btn-set" style={{display: "block"}}>
                        <div class="slider-heading">Eat,Sleep,Repeat</div> <br/><a class="btnn btn-huge  mt-20" href="/UserMenu">Menu</a><a class="btnn btn-huge mt-20" href="/store">Store</a></div>
                </div>
            </div>
            <div class="active carousel-item"><img src="images/3.13a7620a.jpg" class="slider-image"/>
                <div class="carousel-caption">
                    <div class="btn-set" style={{display: "block"}}>
                        <div class="slider-heading">Eat,Sleep,Repeat</div> <br/><a href="#" class="btnn btn-huge  mt-20">Menu</a><a href="#" class="btnn btn-huge  mt-20">Store</a></div>
                </div>
            </div>
            <div class="carousel-item"><img src="images/1.3156bc52.jpg" class="slider-image"/>
                <div class="carousel-caption">
                    <div class="btn-set" style={{display: "block"}}>
                        <div class="slider-heading">Eat,Sleep,Repeat</div> <br/><a href="#" class="btnn btn-huge  mt-20">Menu</a><a href="#" class="btnn btn-huge  mt-20">Store</a></div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" role="button" href="#"><img src="images/short_arrow_left.8c8b5dab.svg" class="arrow-style"/><span class="sr-only">Previous</span></a>
        <a class="carousel-control-next" role="button" href="#"><img src="images/short_arrow_right.64641667.svg" class="arrow-style"/><span class="sr-only">Next</span></a>
    </div>


    <div dir="ltr" class="rev_slider_wrapper fullscreenbanner-container">
        <div id="rev-slider-1" class="mad-d-none rev-slider fullscreenabanner">
            <ul>
                <li data-transition="fade"><img src="images/section/1920x1080_slide1.jpg" alt="" data-no-retina="true"/>
                    <div class="tp-caption tp-resizeme tp-layer-section-title">Meet, Eat, Enjoy <br/>The True Taste</div>
                    <div class="tp-caption tp-resizeme">
                        <div class="btn-set"><a href="#" class="btn btn-huge">Book a Table</a><a href="#" class="btn btn-huge">Order Online</a></div>
                    </div>
                </li>
                <li data-transition="fade"><img src="images/section/1920x1080_slide2.jpg" alt=""/>
                    <div class="tp-caption tp-resizeme tp-layer-section-title">Meet, Eat, Enjoy <br/>The True Taste</div>
                    <div class="tp-caption tp-resizeme">
                        <div class="btn-set"><a href="#" class="btn btn-huge">Book a Table</a><a href="#" class="btn btn-huge">Order Online</a></div>
                    </div>
                </li>
                <li data-transition="fade"><img src="images/section/1920x1080_slide3.jpg"/>
                    <div class="tp-caption tp-resizeme tp-layer-section-title">Meet, Eat, Enjoy <br/>The True Taste</div>
                    <div class="tp-caption tp-resizeme">
                        <div class="btn-set"><a href="#" class="btn btn-huge">Book a Table</a><a href="#" class="btn btn-huge">Order Online</a></div>
                    </div>
                </li>
            </ul>
            <div class="mad-arrow"><img class="svg" src="images/section/teakbreak_svg_icons/short_arrow_left.svg" alt=""/></div>
            <div class="slide-status-numbers"></div>
            <div class="rev-socials">
                <ul>
                    <li><a href="#" class="mad-link">Facebook</a></li>
                    <li><a href="#" class="mad-link">Twitter</a></li>
                    <li><a href="#" class="mad-link">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Crousel;