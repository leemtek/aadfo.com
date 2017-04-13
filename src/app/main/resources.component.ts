import { Component } from "@angular/core";

@Component({
    selector: "app-resources",
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

        <!-- main-container start -->
        <!-- ================ -->
        <section class="main-container">
            <div class="container">
                <div class="row">

                    <!-- main start -->
                    <!-- ================ -->
                    <div class="main col-md-12">
                        <div class="row">
                            <div class="col-md-4 ">
                                <div class="feature-box-2 object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                                    <span class="icon without-bg"><i class="fa fa-diamond"></i></span>
                                    <div class="body">
                                        <h4 class="title">Links</h4>
                                        <p>Voluptatem ad provident non repudiandae beatae cupiditate amet reiciendis lorem dolor consectetur.</p>
                                        <a routerLink="/about/mission">View Page<i class="pl-5 fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div><!-- /row -->
                    </div>
                    <!-- main end -->

                </div>
            </div>
        </section>
        <!-- main-container end -->
    `,
    styles: [`
    
    `]
})
export class ResourcesComponent {

} // AboutComponent