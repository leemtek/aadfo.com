import { Routes, RouterModule } from "@angular/router";

// Main Pages
import { HomepageComponent } from "./main/homepage.component";
import { AboutComponent } from "./main/about.component";

export const APP_ROUTES: Routes = [
    { path: "", component: HomepageComponent },
    { path: "about", component: AboutComponent }
]; // APP_ROUTES

export const routing = RouterModule.forRoot(APP_ROUTES);