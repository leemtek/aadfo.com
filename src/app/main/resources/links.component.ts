import { Component } from "@angular/core";

@Component({
    selector: "app-resources-links",
    template: `
        <!-- banner start -->
        <!-- ================ -->
        <div class="banner dark-translucent-bg" style="background-image:url('http://htmlcoder.me/preview/the_project/v.1.4/template/images/page-about-banner-1.jpg'); background-position: 50% 27%;">
            <!-- breadcrumb start -->
            <!-- ================ -->
            <div class="breadcrumb-container">
                <div class="container">
                    <ol class="breadcrumb">
                        <li><i class="fa fa-home pr-10"></i><a class="link-dark" href="/">Home</a></li>
                        <li class="active">Resources</li>
                    </ol>
                </div>
            </div>
            <!-- breadcrumb end -->
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center pv-20">
                        <div data-animation-effect="fadeIn" data-effect-delay="100"><img src="/assets/images/logo.png" class="img-responsive center-block" style="width: auto; height: 150px;" alt="American Academy of Dentofacial Orthopedics" /></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- banner end -->

        <section class="main-container">
            <div class="container">
                <div class="row">

                    <!-- main start -->
                    <!-- ================ -->
                    <div class="main col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="feature-box-2 object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                    <span class="icon without-bg"><i class="fa fa-diamond"></i></span>
                                    <div class="body">
                                        <h4 class="title">TMJ Sleep &amp; Therapy Centre</h4>
                                        <p>
                                            Looking for a san francisco TMJ specialist or a sleep doctor? Our center offers neck, jaw and facial pain 
                                            treatment and therapies in San Francisco's Bay area.
                                        </p>
                                        <a href="http://www.tmjsleeptherapycentre.com/" target="_blank">Visit Website<i class="pl-5 fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div><!-- /col -->
                            <div class="col-md-6">
                                <div class="feature-box-2 object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                    <span class="icon without-bg"><i class="fa fa-diamond"></i></span>
                                    <div class="body">
                                        <h4 class="title">Brentwood Family Dental</h4>
                                        <p>
                                            Dr. Alkhoury and his staff are dedicated to improve the smile of their patients. Make an 
                                            appointment with the best dentist in the area.
                                        </p>
                                        <a href="http://www.yourdentistisyourartist.com/" target="_blank">Visit Website<i class="pl-5 fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div><!-- /col -->

                            <div class="clearfix"></div>

                            <div class="col-md-6">
                                <div class="feature-box-2 object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                    <span class="icon without-bg"><i class="fa fa-diamond"></i></span>
                                    <div class="body">
                                        <h4 class="title">DuaneLeem.com</h4>
                                        <p>Full Stack Developer specializing in creating robust web applications proteted by security best practices.</p>
                                        <a href="https://duaneleem.com" target="_blank">Visit Website<i class="pl-5 fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div><!-- /col -->
                        </div><!-- /row -->
                    </div>
                    <!-- main end -->

                    <!-- Sidebar -->
                    <app-resources-sidebar>Loading...</app-resources-sidebar>

                </div>
            </div>
        </section>
    `,
    styles: [`
    
    `]
})
export class LinksComponent {

} // AboutComponent