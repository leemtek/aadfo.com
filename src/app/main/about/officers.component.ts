import { Component } from "@angular/core";

@Component({
    selector: "app-about-officers",
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
                        <li><a class="link-dark" href="/about">About</a></li>
                        <li class="active">Officers &amp; Directors</li>
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
                            <div class="col-lg-12">
                                <h1 class="title">Officers, Directors, Committees</h1>

                                <h4 class="mb-20"><strong>Academy Officers</strong></h4>

                                <div class="row grid-space-10">
                                    <div class="col-sm-6 col-md-4">
                                        <div class="image-box team-member style-2 shadow bordered mb-20 text-center">
                                            <div class="overlay-container overlay-visible">
                                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/aadfo/images/about-dralkhoury.jpg" alt="Jamil Alkhoury, DDS">
                                            </div>
                                            <div class="body">
                                                <h4 class="margin-clear">Jamil Alkhoury, DDS</h4>
                                                <small>President</small>
                                                <div class="separator mt-10"></div>
                                                <ul class="social-links circle colored margin-clear">
                                                    <li class="facebook"><a target="_blank" href="https://www.facebook.com/jamil.alkhoury"><i class="fa fa-facebook"></i></a></li>
                                                    <li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div><!-- /body -->
                                        </div><!-- /image-box -->
                                    </div><!-- /col -->
                                </div><!-- /row grid-space-10 -->
                            </div><!-- /col -->
                        </div><!-- /row -->
                    </div>
                    <!-- main end -->

                    <!-- Sidebar -->
                    <app-about-sidebar>Loading...</app-about-sidebar>

                </div>
            </div>
        </section>
        <!-- main-container end -->
    `,
    styles: [`
    
    `]
})
export class OfficersComponent {

} // OfficersComponent