import { Component } from "@angular/core";

@Component({
    selector: "app-homepage",
    template: `
        <!-- banner start -->
        <!-- ================ -->
        <div id="banner" class="banner clearfix">

            <!-- slideshow start -->
            <!-- ================ -->
            <div class="slideshow">

                <!-- slider revolution start -->
                <!-- ================ -->
                <div class="slider-revolution-5-container">
                    <div id="slider-banner-fullwidth-big-height" class="slider-banner-fullwidth-big-height rev_slider" data-version="5.0">
                        <ul class="slides">
                            <!-- slide 1 start -->
                            <!-- ================ -->
                            <li data-transition="random" data-slotamount="default" data-masterspeed="default" data-title="Wellcome">

                            <!-- main image -->
                            <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/medical-slider-slide-1.jpg" alt="slidebg1" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover"  class="rev-slidebg">

                            <!-- Transparent Background -->
                            <div class="tp-caption light-translucent-bg"
                                data-x="center"
                                data-y="center"
                                data-start="0"
                                data-transform_idle="o:1;"
                                data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                                data-transform_out="o:0;s:600;"
                                data-width="5000"
                                data-height="5000">
                            </div>

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption large_dark"
                                data-x="left"
                                data-y="220"
                                data-start="500"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];sX:1;sY:1;o:0;s:1150;e:Power4.easeInOut;"
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                                    <img id="logo_hero" src="./assets/images/logo.png" alt="American Academy of Dentofacial Orthopedics" class="img-responsive" />
                            </div>

                            </li>
                            <!-- slide 1 end -->

                            <!-- slide 2 start -->
                            <!-- ================ -->
                            <li class="text-right" data-transition="random" data-slotamount="default" data-masterspeed="default" data-title="Top Doctors">

                            <!-- main image -->
                            <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/medical-slider-slide-2.jpg" alt="slidebg2" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover" class="rev-slidebg">

                            <!-- Transparent Background -->
                            <div class="tp-caption dark-translucent-bg"
                                data-x="center"
                                data-y="center"
                                data-start="0"
                                data-transform_idle="o:1;"
                                data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                                data-transform_out="o:0;s:600;"
                                data-width="5000"
                                data-height="5000">
                            </div>

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption large_white"
                                data-x="right"
                                data-y="200"
                                data-start="500"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];sX:1;sY:1;o:0;s:1150;e:Power4.easeInOut;"
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Top doctors providing quality care
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption large_white tp-resizeme"
                                data-x="right"
                                data-y="270"
                                data-start="750"
                                data-transform_idle="o:1;"
                                data-transform_in="o:0;s:2000;e:Power4.easeInOut;">
                                    <div class="separator-3 light"></div>
                            </div>

                            <!-- LAYER NR. 3 -->
                            <div class="tp-caption medium_white"
                                data-x="right"
                                data-y="290"
                                data-start="750"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];sX:1;sY:1;s:850;e:Power4.easeInOut;"
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                                    Setting up new standard in providing early diagnosis for <br />
                                    early prevention and treatment for all orthopedics challenges <br />
                                    to improve patient outcomes...
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption small_white"
                                data-x="right"
                                data-y="410"
                                data-start="1000"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];sX:1;sY:1;o:0;s:600;e:Power4.easeInOut;"
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"><a href="#" class="btn btn-dark btn-default btn-animated">Learn More <i class="fa fa-arrow-right"></i></a>
                            </div>

                            </li>
                            <!-- slide 2 end -->
                        </ul>
                        <div class="tp-bannertimer"></div>
                    </div>
                </div>
                <!-- slider revolution end -->

            </div>
            <!-- slideshow end -->

        </div>
        <!-- banner end -->

        <div id="page-start"></div>

        <!-- section -->
        <!-- ================ -->
        <section id="about"  class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-push-6">
                        <div class="overlay-container overlay-visible">
                            <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/corporate-5-section-image-1.jpg" alt="">
                            <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                            <div class="overlay-bottom hidden-xs">
                                <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis sunt, quae alias impedit ea molestias recusandae.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-md-pull-6">
                        <h2 class="title">About Us</h2>
                        <div class="separator-2"></div>
                        <p>Lorem ipsum dolor sit amet, lotrem <span class="text-default">some colored text</span>. Nulla explicabo <strong>attention to this</strong> blanditiis, ex cupiditate ipsam debitis rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing llum magni nam doloribus eligendi, veritatis aspernatur amet odit doloremque possimus error. Vel, totam numquam animi!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et eius aut nisi dolore ut. Sapiente velit quidem, unde fugit. Neque illum, debitis ut, porro natus.</p>
                        <a href="page-about.html" class="btn radius-50 btn-default btn-hvr hvr-shutter-out-horizontal"><i class="icon-users-1 pr-10"></i>Learn More</a>
                    </div>
                </div>
            </div>
            <br>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section class="dark-translucent-bg parallax pv-30" style="background-image:url(http://htmlcoder.me/preview/the_project/v.1.4/template/images/corporate-5-section-image-2.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="text-center">Our <strong>Partners</strong></h2>
                        <div class="separator with-icon"><i class="fa fa-suitcase bordered"></i></div>
                        <p class="large text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptas facere vero ex tempora saepe perspiciatis ducimus sequi animi.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="clients-container">
                        <div class="clients">
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-1.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="200">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-2.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-3.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="400">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-4.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="500">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-5.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="600">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-6.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="700">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-7.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="800">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-8.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-1.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="200">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-2.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-3.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="400">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-4.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="500">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-5.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="600">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-6.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="700">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-7.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="800">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-8.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-1.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="200">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-2.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-3.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="400">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-4.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="500">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-5.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="600">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-6.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="700">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-7.png" alt=""></a>
                            </div>
                            <div class="client-image object-non-visible" data-animation-effect="fadeIn" data-effect-delay="800">
                                <a href="#"><img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/client-8.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section id="services" class="light-gray-bg pv-30 clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="text-center">Main <strong>Services</strong></h2>
                        <div class="separator"></div>
                        <p class="large text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptas facere vero ex tempora saepe perspiciatis ducimus sequi animi.</p>
                    </div>
                    <div class="col-sm-4">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/service-1.jpg" alt="">
                                <a href="images/service-1.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">Service One</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/service-2.jpg" alt="">
                                <a href="images/service-2.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">Service One</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/service-3.jpg" alt="">
                                <a href="images/service-3.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">Service One</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ipsam nihil, adipisci rem minus? Voluptatem distinctio laborum porro aspernatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section class="section dark-bg clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="call-to-action text-center">
                            <div class="row">
                                <div class="col-sm-8">
                                    <h1 class="title">Don't Miss Out Our Offers</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quasi explicabo consequatur consectetur, a atque voluptate officiis eligendi nostrum.</p>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <p><a href="#" class="btn btn-lg btn-gray-transparent btn-animated">Learn More<i class="fa fa-arrow-right pl-20"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section end -->

        <!-- section -->
        <!-- ================ -->
        <section class="pv-30">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="text-center">More <strong>Services</strong></h2>
                        <div class="separator"></div>
                        <p class="large text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptas facere vero ex tempora saepe perspiciatis ducimus sequi animi.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 ">
                        <div class="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                            <span class="icon without-bg"><i class="fa fa-diamond"></i></span>
                            <div class="body">
                                <h4 class="title">Clean Code &amp; Design</h4>
                                <p>Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem dolor consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="150">
                            <span class="icon without-bg"><i class="fa fa-connectdevelop"></i></span>
                            <div class="body">
                                <h4 class="title">Extremely Flexible</h4>
                                <p>Iure sequi unde hic. Sapiente quaerat sequi inventore veritatis cumque lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="200">
                            <span class="icon without-bg"><i class="icon-snow"></i></span>
                            <div class="body">
                                <h4 class="title">Latest Technologies</h4>
                                <p>Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 ">
                        <div class="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="250">
                            <span class="icon without-bg"><i class="icon-megaphone"></i></span>
                            <div class="body">
                                <h4 class="title">Easy to Use</h4>
                                <p>Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem dolor consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="300">
                            <span class="icon without-bg"><i class="fa fa-arrows"></i></span>
                            <div class="body">
                                <h4 class="title">Responsive Design</h4>
                                <p>Iure sequi unde hic. Sapiente quaerat sequi inventore veritatis cumque lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="pv-20 ph-20 feature-box-2 light-gray-bg boxed shadow object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="350">
                            <span class="icon without-bg"><i class="icon-star-empty"></i></span>
                            <div class="body">
                                <h4 class="title">Deticated Support</h4>
                                <p>Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section id="study" class="section pv-40 light-gray-bg clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h3 class="title text-center">Studying at <span class="text-default">AADFO</span></h3>
                        <div class="separator"></div>
                        <p class="lead text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dignissimos, adipisci ipsa aut.</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="image-box shadow text-center mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/education-4.jpg" alt="">
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom">
                                    <div class="text">
                                        <p class="lead margin-clear mobile-visible">Admissions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="image-box shadow text-center mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/education-5.jpg" alt="">
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom">
                                    <div class="text">
                                        <p class="lead margin-clear mobile-visible">Education</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="image-box shadow text-center mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/education-6.jpg" alt="">
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom">
                                    <div class="text">
                                        <p class="lead margin-clear mobile-visible">Departments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="image-box shadow text-center mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/education-7.jpg" alt="">
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom">
                                    <div class="text">
                                        <p class="lead margin-clear mobile-visible">Library</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="image-box shadow text-center mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/education-8.jpg" alt="">
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom">
                                    <div class="text">
                                        <p class="lead margin-clear mobile-visible">Staff/Faculty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="image-box shadow text-center mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="http://htmlcoder.me/preview/the_project/v.1.4/template/images/education-9.jpg" alt="">
                                <a href="#" class="overlay-link"><i class="fa fa-link"></i></a>
                                <div class="overlay-bottom">
                                    <div class="text">
                                        <p class="lead margin-clear mobile-visible">Alumni</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section class="pv-40 stats padding-bottom-clear dark-translucent-bg hovered background-img-6">
            <div class="clearfix">
                <div class="col-md-3 col-xs-6 text-center">
                    <div class="feature-box object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                        <span class="icon dark-bg large circle"><i class="fa fa-diamond"></i></span>
                        <h3><strong>Doctors</strong></h3>
                        <span class="counter" data-to="1525" data-speed="5000">0</span>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6 text-center">
                    <div class="feature-box object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                        <span class="icon dark-bg large circle"><i class="fa fa-users"></i></span>
                        <h3><strong>Patients</strong></h3>
                        <span class="counter" data-to="1225" data-speed="5000">0</span>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6 text-center">
                    <div class="feature-box object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                        <span class="icon dark-bg large circle"><i class="fa fa-cloud-download"></i></span>
                        <h3><strong>Resources</strong></h3>
                        <span class="counter" data-to="12235" data-speed="5000">0</span>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6 text-center">
                    <div class="feature-box object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
                        <span class="icon dark-bg large circle"><i class="fa fa-share"></i></span>
                        <h3><strong>Success</strong></h3>
                        <span class="counter" data-to="15002" data-speed="5000">0</span>
                    </div>
                </div>
            </div>
            <!-- footer top start -->
            <!-- ================ -->
            <div class="dark-translucent-bg footer-top animated-text default-hovered" style="background-color:rgba(0,0,0,0.6);">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="call-to-action text-center">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <h2>Learn more about AADFO</h2>
                                        <h2>Contact us today!</h2>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="mt-10"><a href="#footer" class="btn btn-animated btn-lg btn-gray-transparent">Email<i class="fa fa-envelope-o pl-20"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer top end -->
        </section>
        <!-- section end -->
    `,
    styles: [`
        #logo_hero {
            width: 600px !important;
            height: auto !important;
        }

        @media screen and (max-width: 769px) {
            #logo_hero {
                width: 400px !important;
                height: auto !important;
            }
        }

        @media screen and (max-width: 426px) {
            #logo_hero {
                width: 225px !important;
                height: auto !important;
            }
        }
    `]
})
export class HomepageComponent {

} // HomepageComponent