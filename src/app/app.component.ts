import { Component } from "@angular/core"

@Component({
    selector: "app-main",
    template: `
        <!-- Header -->
        <app-header>Loading...</app-header>

        <!-- Content -->
        <router-outlet></router-outlet>

        <!-- Footer -->
        <app-footer>Loading...</app-footer>
    `, // template
    styles: [`
    
    `] // styles
})
export class AppComponent {

}