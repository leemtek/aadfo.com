import { Component } from "@angular/core";

@Component({
    selector: "app-about-sidebar",
    template: `
        <!-- sidebar start -->
        <!-- ================ -->
        <aside class="col-md-4 col-lg-3 col-lg-offset-1">
            <div class="sidebar">
                <div class="block clearfix">
                    <h3 class="title"><a href="/about">About AADFO</a></h3>
                    <div class="separator-2"></div>
                    <nav>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a routerLink="/about/mission">Mission Statement</a></li>
                            <li><a routerLink="/about/officers">Officers &amp; Directors</a></li>
                            <li><a routerLink="/about/contact">Contact Us</a></li>
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
export class AboutmenuComponent {

} // AboutmenuComponent