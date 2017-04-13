import { Component } from "@angular/core";

@Component({
    selector: "app-about-contact",
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
                        <li class="active">Contact</li>
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
                    <div class="main col-md-8 space-bottom">
                        <p class="lead">It would be great to hear from you! Just drop us a line and ask for anything with which you think we could be helpful. We are looking forward to hearing from you!</p>
                        <div class="alert alert-success hidden" id="MessageSent">
                            We have received your message, we will contact you very soon.
                        </div>
                        <div class="alert alert-danger hidden" id="MessageNotSent">
                            Oops! Something went wrong, please verify that you are not a robot or refresh the page and try again.
                        </div>
                        <div class="contact-form">
                            <form id="contact-form-with-recaptcha" class="margin-clear" role="form">
                                <div class="form-group has-feedback">
                                    <label for="name">Name*</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="">
                                    <i class="fa fa-user form-control-feedback"></i>
                                </div>
                                <div class="form-group has-feedback">
                                    <label for="email">Email*</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="">
                                    <i class="fa fa-envelope form-control-feedback"></i>
                                </div>
                                <div class="form-group has-feedback">
                                    <label for="subject">Subject*</label>
                                    <input type="text" class="form-control" id="subject" name="subject" placeholder="">
                                    <i class="fa fa-navicon form-control-feedback"></i>
                                </div>
                                <div class="form-group has-feedback">
                                    <label for="message">Message*</label>
                                    <textarea class="form-control" rows="6" id="message" name="message" placeholder=""></textarea>
                                    <i class="fa fa-pencil form-control-feedback"></i>
                                </div>
                                <div class="g-recaptcha" data-sitekey="6LdqXycTAAAAANwr-Pi06hTJMXKhGRsO4n4i1KxV"></div>
                                <input type="submit" value="Submit" class="submit-button btn btn-default">
                            </form>
                        </div>
                    </div>
                    <!-- main end -->

                    <!-- sidebar start -->
                    <!-- ================ -->
                    <aside class="col-md-3 col-lg-offset-1 space-bottom-40">
                        <div class="sidebar">
                            <div class="side vertical-divider-left">
                                <img src="/assets/images/logo.png" alt="American Academy of Dentofacial Orthopedics" />
                                <div class="separator-2 mt-20"></div>
                                <ul class="list">
                                    <li><i class="fa fa-home pr-10"></i>450 Sutter St, , Ste 1708<br /><span class="pl-20">San Francisco, CA 94108</span></li>
                                    <li><i class="fa fa-phone pr-10"></i><abbr title="Phone">P:</abbr> (844) TMJ-9111</li>
                                    <li><i class="fa fa-phone pr-10"></i><abbr title="Phone">P:</abbr> (415) 226-7274</li>
                                    <li><i class="fa fa-fax pr-10"></i><abbr title="Phone">F:</abbr> (866) 519-1570</li>
                                    <li><i class="fa fa-envelope pr-10"></i><a href="mailto:dralkhoury@gmail.com">dralkhoury@gmail.com</a></li>
                                </ul>
                                <ul class="social-links circle small margin-clear clearfix animated-effect-1">
                                    <li class="twitter"><a target="_blank" href="http://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                                    <li class="skype"><a target="_blank" href="http://www.skype.com"><i class="fa fa-skype"></i></a></li>
                                    <li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                    <li class="googleplus"><a target="_blank" href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="youtube"><a target="_blank" href="http://www.youtube.com"><i class="fa fa-youtube-play"></i></a></li>
                                    <li class="flickr"><a target="_blank" href="http://www.flickr.com"><i class="fa fa-flickr"></i></a></li>
                                    <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <app-about-sidebar>Loading...</app-about-sidebar>
                    <!-- sidebar end -->
                </div>
            </div>
        </section>
        <!-- main-container end -->
    `,
    styles: [``]
})
export class ContactComponent {

}