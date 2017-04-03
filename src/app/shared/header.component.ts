import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    template: `
        <div class="header-container">
            <!-- header-top start -->
            <!-- classes:  -->
            <!-- "dark": dark version of header top e.g. class="header-top dark" -->
            <!-- "colored": colored version of header top e.g. class="header-top colored" -->
            <!-- ================ -->
            <div class="header-top dark ">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-3 col-sm-6 col-md-8">
                            <!-- header-top-first start -->
                            <!-- ================ -->
                            <div class="header-top-first clearfix">
                                <ul class="social-links circle small clearfix hidden-xs">
                                    <li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                    <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                                </ul>
                                <div class="social-links hidden-lg hidden-md hidden-sm circle small">
                                    <div class="btn-group dropdown">
                                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><i class="fa fa-share-alt"></i></button>
                                        <ul class="dropdown-menu dropdown-animation">
                                            <li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                            <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <ul class="list-inline hidden-sm hidden-xs">
                                    <li><i class="fa fa-envelope-o pr-5 pl-10"></i> dralkhoury@gmail.com</li>
                                </ul>
                            </div>
                            <!-- header-top-first end -->
                        </div>
                        <div class="col-xs-9 col-sm-6 col-md-4">

                            <!-- header-top-second start -->
                            <!-- ================ -->
                            <div id="header-top-second"  class="clearfix">

                                <!-- header top dropdowns start -->
                                <!-- ================ -->
                                <div class="header-top-dropdown text-right">
                                    <div class="btn-group">
                                        <a class="btn btn-default btn-sm"><i class="fa fa-shopping-cart pr-10"></i> Store</a>
                                    </div>
                                    <div class="btn-group">
                                        <a class="btn btn-default btn-sm"><i class="fa fa-user pr-10"></i> Join</a>
                                    </div>
                                    <div class="btn-group dropdown">
                                        <button type="button" class="btn dropdown-toggle btn-default btn-sm" data-toggle="dropdown"><i class="fa fa-lock pr-10"></i> Login</button>
                                        <ul class="dropdown-menu dropdown-menu-right dropdown-animation">
                                            <li>
                                                <form class="login-form margin-clear">
                                                    <div class="form-group has-feedback">
                                                        <label class="control-label">Username</label>
                                                        <input type="text" class="form-control" placeholder="">
                                                        <i class="fa fa-user form-control-feedback"></i>
                                                    </div>
                                                    <div class="form-group has-feedback">
                                                        <label class="control-label">Password</label>
                                                        <input type="password" class="form-control" placeholder="">
                                                        <i class="fa fa-lock form-control-feedback"></i>
                                                    </div>
                                                    <button type="submit" class="btn btn-gray btn-sm">Log In</button>
                                                    <span class="pl-5 pr-5">or</span>
                                                    <button type="submit" class="btn btn-default btn-sm">Sing Up</button>
                                                    <ul>
                                                        <li><a href="#">Forgot your password?</a></li>
                                                    </ul>
                                                    <span class="text-center">Login with</span>
                                                    <ul class="social-links circle small colored clearfix">
                                                        <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                                                        <li class="twitter"><a target="_blank" href="http://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                                                        <li class="googleplus"><a target="_blank" href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
                                                    </ul>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!--  header top dropdowns end -->
                            </div>
                            <!-- header-top-second end -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-top end -->
            
            <!-- header start -->
            <!-- classes:  -->
            <!-- "fixed": enables fixed navigation mode (sticky menu) e.g. class="header fixed clearfix" -->
            <!-- "dark": dark version of header e.g. class="header dark clearfix" -->
            <!-- "full-width": mandatory class for the full-width menu layout -->
            <!-- "centered": mandatory class for the centered logo layout -->
            <!-- ================ --> 
            <header class="header centered fixed    clearfix">
                
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                
                            <!-- header-second start -->
                            <!-- ================ -->
                            <div class="header-second clearfix">
                                <!-- main-navigation start -->
                                <!-- classes: -->
                                <!-- "onclick": Makes the dropdowns open on click, this the default bootstrap behavior e.g. class="main-navigation onclick" -->
                                <!-- "animated": Enables animations on dropdowns opening e.g. class="main-navigation animated" -->
                                <!-- "with-dropdown-buttons": Mandatory class that adds extra space, to the main navigation, for the search and cart dropdowns -->
                                <!-- ================ -->
                                <div class="main-navigation animated">

                                    <!-- navbar start -->
                                    <!-- ================ -->
                                    <nav class="navbar navbar-default" role="navigation">
                                        <div class="container-fluid">

                                            <!-- Toggle get grouped for better mobile display -->
                                            <div class="navbar-header">
                                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                                    <span class="sr-only">Toggle navigation</span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                </button>
                                            </div>

                                            <!-- Collect the nav links, forms, and other content for toggling -->
                                            <div class="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
                                                <ul class="nav navbar-nav navbar-right">
                                                    <li><a href="#banner">Home</a></li>

                                                    <li class="dropdown">
														<a href="#" class="dropdown-toggle" data-toggle="dropdown">About</a>
														<ul class="dropdown-menu">
															<li><a href="#">Mission Statement</a></li>
															<li><a href="#">Officers & Directors</a></li>
															<li><a href="#">Central Office</a></li>
															<li><a href="#">Code of Ethics</a></li>
															<li><a href="#">Bylaws</a></li>
															<li><a href="#">Watch Our Video</a></li>
                                                            <li><a href="#footer">Contact Us</a></li>
														</ul>
													</li>
                                                    
                                                    <li class="dropdown">
                                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Events &amp; Meetings</a>
                                                        <ul class="dropdown-menu">
															<li><a href="#">Calendar of Events</a></li>
															<li><a href="#">Listing of Events</a></li>
														</ul>
                                                    </li>

                                                    <li><a href="#services">Exhibitors &amp; Sponsors</a></li>

                                                    <li class="dropdown">
                                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Resources</a>
                                                        <ul class="dropdown-menu">
															<li><a href="#">For Professionals</a></li>
															<li><a href="#">For Patients</a></li>
															<li><a href="#">For Board Members</a></li>
															<li><a href="#">Links</a></li>
														</ul>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </nav>
                                    <!-- navbar end -->

                                </div>
                                <!-- main-navigation end -->
                            </div>
                            <!-- header-second end -->
                
                        </div>
                    </div>
                </div>
                
            </header>
            <!-- header end -->
        </div>
    `,
    styles: [`
    
    `]
})
export class HeaderComponent {

}