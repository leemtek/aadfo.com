import { Component } from "@angular/core";

@Component({
    selector: "app-sponsors",
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
                        <li class="active">Exhibitors &amp; Sponsors</li>
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
                        <h1>Exhibitors &amp; Sponsors</h1>

                        <p>Here is a contact list of our generous exhibitors and sponsors</p>

                        <h3>BioModeling Solutions, Inc.</h3>
                        <div>15455 NW Greenbrier Pkwy # 250</div>
                        <div>Beaverton, OR 97006</div>
                        <div>503-430-7529</div>
                        <div>tama.fisher@biomodelings.com </div>
                        <div>
                            Our innovative solutions provide natural ways for the body to improve snoring and sleep 
                            apnea in adults, as well as tooth alignment and facial appearance, using the concepts of 
                            Pneumopedics and Craniofacial Epigenetics.
                        </div>

                        <h3>Bio Research</h3>
                        <div>9275 North 49th St., #150</div>
                        <div>Milwaukee, WI 53223</div>
                        <div>414-357-7525</div>
                        <div><a href="mailto:gregk@bioresearchinc.coms">gregk@bioresearchinc.com</a></div>
                        <div>
                            Simple, accurate and cost-effective craniofacial diagnostic aids for the general dentist. 
                            Used by the best CR and NM dentists worldwide. Joint Vibration Analysis, T-Scan III, Bio-EMG 
                            and Jaw Tracking technology.
                        </div>
                    </div><!-- /col -->
                    <!-- main end -->

                </div>
            </div>
        </section>
        <!-- main-container end -->
    `,
    styles: [``]
})
export class SponsorsComponent {

} // SponsorsComponent