import { Component } from "@angular/core";

@Component({
    selector: "app-about-mission",
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
                        <li class="active">Mission</li>
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
                                <h1 class="text-center space-bottom-40">AADFO Mission Statement</h1>

                                <h2>AADFO Vision Statement</h2>
                                <div>
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor 
                                    at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                </div>

                                <h2>AADFO Mission Statement</h2>
                                <div>
                                    Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus 
                                    magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.
                                </div>

                                <h2>AADFO Purposes</h2>
                                <ol>
                                    <li>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</li>
                                    <li>Curabitur aliquet quam id dui posuere blandit.</li>
                                    <li>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</li>
                                    <li>Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.</li>
                                    <li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li>
                                </ol>

                                <h2>Guiding Principles, Values and Beliefs</h2>
                                <div class="space-bottom-10">American Academy of Dentofacial Orthopedics believes that:</div>
                                <ol>
                                    <li>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</li>
                                    <li>Curabitur aliquet quam id dui posuere blandit.</li>
                                    <li>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</li>
                                    <li>Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.</li>
                                    <li>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</li>
                                </ol>
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
export class MissionComponent {

} // MissionComponent