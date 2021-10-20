import React from 'react'

 const Section = () => {
    return (
        <div>
            <section id="content" style={{backgroundColor: "rgb(0, 0, 0)" }}>
                <div class="content-wrap">
                    <div class="modal-on-load" data-target="#myModal1"></div>
                    <div class="modal1 mfp-hide subscribe-widget" id="myModal1">
                        <div class="block dark mx-auto" data-height-xl="400" >
                            <div>
                                <div class="widget-subscribe-form-result"></div>
                                <form class="widget-subscribe-form2" action="include/subscribe.php" method="post">
                                    <input type="email" id="widget-subscribe-form2-email" name="widget-subscribe-form-email" class="form-control form-control-lg not-dark required email" placeholder="Enter your Email"/>
                                    <button class="button button-rounded button-border button-light ms-0 inlin"
                                        type="submit">Subsc </button></form>
                            </div>
                        </div>
                    </div>
                    <section id="section-about" class="page-section section center mb-0 dark bg-section-1">
                        <div class="container clearfix">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-5">
                                    <div class="heading-block border-bottom-0"><span class="before-heading color">ESTD. 2021</span>
                                        <h3>The History</h3>
                                    </div>
                                    <div class="mx-auto center row">
                                        <div class="col-lg-12">
                                            <p class="text-start">Since its creation in 2001, the Café gitana is for many Montrealers a weekly leisure destination, that appears on several tourists' agenda as well Its authentic Middle Eastem decoration and menu make it
                                                an establishment of exception Our business distinguishes itself due to the quality and diversity of its products, as well as by the efficiency of its specialized service. Enjoying the unique atmosphere
                                                of our café is, in itself, travelling through the many cultures reflected by institution.<br/><br/>
                                               
                                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="mad-section mad-section--stretched-content">
                        <div class="mad-colorizer-bg-color">
                            <div class="with-svg-item svg-right-side top-space"><img src="images/tomatos.7d342a4d.png" alt=""/></div>
                            <div class="with-svg-item svg-right-side bottom2"><img src="images/mud2.df0b0dd1.png" alt=""/></div>
                        </div>
                        <div class="mad-menu-cards item-col-2">
                            <div class="mad-col">
                                <div class="mad-menu-card">
                                    <div class="mad-menu-border"></div>
                                    <a href="#" class="mad-card-img with-overlay"><img src="images/5.e561e09c.png" alt="" class="cofee_img"/></a>
                                    <div class="mad-card-text">
                                        <h2>Tea</h2><a class="mad-read-more" href="/UserMenu">View Menu</a></div>
                                </div>
                            </div>
                            <div class="mad-col">
                                <div class="mad-menu-card">
                                    <div class="mad-menu-border"></div>
                                    <a href="#" class="mad-card-img with-overlay"><img src="images/6.4dd00969.png" alt="" class="cofee_img"/></a>
                                    <div class="mad-card-text">
                                        <h2>Smoking</h2><a class="mad-read-more" href="/Store">View Store</a></div>
                                </div>
                            </div>
                            <div class="mad-col itee">
                                <div class="mad-menu-card">
                                    <div class="mad-menu-border"></div>
                                    <a href="#" class="mad-card-img with-overlay"><img src="images/7.5bda3153.png" alt="" style={{maxHeight: "648px"}}/></a>
                                    <div class="mad-card-text">
                                        <h2>Bar</h2><a class="mad-read-more" href="/ourSpeciality">View our Speciality</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video-wrap">
                        <div class="video-overlay"></div>
                    </div>
                    <section id="section-contact" class="page-section section dark m-0 bg-section-5">
                        <div class="container clearfix">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-6">
                                    <div class="heading-block border-bottom-0"><span class="before-heading color">Whether you have a question or a suggestion we are there for you.</span>
                                        <h3> Reach Out !</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-widget">
                                                <div class="form-result"></div>
                                                <form class="mb-0 row" id="template-contactform" name="template-contactform" action="include/form.php" method="post">
                                                    <div class="form-process">
                                                        <div class="css3-spinner">
                                                            <div class="css3-spinner-scaler"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12"><input type="text" id="template-contactform-name" name="template-contactform-name" class="sm-form-control required" placeholder="Full Name*" value=""/></div>
                                                    <div class="col-lg-12"><input type="email" id="template-contactform-email" name="template-contactform-email" class="required email sm-form-control" placeholder="Email Address*" value=""/></div>
                                                    <div class="col-lg-12"><textarea class="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30" placeholder="Message*"></textarea></div>
                                                    <div class="col-lg-12 d-none"><input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" class="sm-form-control" value=""/></div>
                                                    <div class="col-lg-12 justify-content-end d-flex"><button class="btnn btn-big  btn-mobile-center" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button></div><input type="hidden" name="prefix"
                                                        value="template-contactform-"/></form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Section;