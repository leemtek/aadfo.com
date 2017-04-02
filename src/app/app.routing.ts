import { Routes, RouterModule } from "@angular/router";

// Main Pages
import { HomepageComponent } from "./main/homepage.components";

export const APP_ROUTES: Routes = [
    { path: "", component: HomepageComponent }
]; // APP_ROUTES

export const routing = RouterModule.forRoot(APP_ROUTES);