import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    template: `
        <footer id="footer" class="clearfix ">
            <!-- .footer start -->
            <!-- ================ -->
            <div class="footer">
                <div class="container">
                    <div class="footer-inner">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-content">
                                    <div class="logo-footer"><img id="logo-footer" src="/assets/images/logo.png" alt=""></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolore fugit vitae quia dicta inventore reiciendis. Ipsa, aut voluptas quaerat.</p>
                                    <ul class="list-inline mb-20">
                                        <li><i class="text-default fa fa-map-marker pr-5"></i> San Francisco, CA</li>
                                        <li><i class="text-default fa fa-phone pl-10 pr-5"></i> +1 9255265229</li>
                                        <li><a href="mailto:dralkhoury@gmail.com" class="link-dark"><i class="text-default fa fa-envelope-o pl-10 pr-5"></i> dralkhoury@gmail.com</a></li>
                                    </ul>
                                    <div class="separator-2"></div>
                                    <ul class="social-links circle margin-clear animated-effect-1">
                                        <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                                        <li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <app-email>Loading...</app-email>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .footer end -->

            <!-- .subfooter start -->
            <!-- ================ -->
            <div class="subfooter">
                <div class="container">
                    <div class="subfooter-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-center">Copyright © 2017 American Academy of Dentofacial Orthopedics by <a target="_blank" href="http://duaneleem.com">Dr. Jamil Alkhoury, DDS, DABCP, DABCDSM, FAACP, AFAAID</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .subfooter end -->

        </footer>
    `,
    styles: [`
        @media screen and (min-width: 767px) {
            .logo-footer {
                width: 300px;
                height: auto;
            } /* .logo-footer */
        } /* @media screen and (min-width: 767px) */
    `]
})
export class FooterComponent {

} // FooterComponent