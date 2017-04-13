import { Component } from "@angular/core";

@Component({
    selector: "app-resources-sidebar",
    template: `
        <!-- Links -->
        <!-- ================ -->
        <aside class="col-md-4 col-lg-3 col-lg-offset-1">
            <div class="sidebar">
                <div class="block clearfix">
                    <div class="side vertical-divider-left space-bottom-40">
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
                    
                    <h3 class="title"><a href="/resources">Resources</a></h3>
                    <div class="separator-2"></div>
                    <nav>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="/resources/links">Links</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
        <!-- sidebar end -->
    `,
    styles: [`
    
    `]
})
export class ResourcemenuComponent {

} // AboutmenuComponent