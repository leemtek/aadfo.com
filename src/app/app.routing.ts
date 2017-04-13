import { Routes, RouterModule } from "@angular/router";

// Main Pages
import { HomepageComponent } from "./main/homepage.component";
import { AboutComponent } from "./main/about.component";
    import { MissionComponent } from "./main/about/mission.component";
    import { OfficersComponent } from "./main/about/officers.component";
    import { ContactComponent } from "./main/about/contact.component";
import { SponsorsComponent } from "./main/sponsors.component";
import { ResourcesComponent } from "./main/resources.component";
  import { LinksComponent } from "./main/resources/links.component";

export const APP_ROUTES: Routes = [
    { path: "", component: HomepageComponent },
    { path: "about", component: AboutComponent },
        { path: "about/mission", component: MissionComponent },
        { path: "about/officers", component: OfficersComponent },
        { path: "about/contact", component: ContactComponent },
    { path: "sponsors", component: SponsorsComponent },
    { path: "resources", component: ResourcesComponent },
        { path: "resources/links", component: LinksComponent }
]; // APP_ROUTES

export const routing = RouterModule.forRoot(APP_ROUTES);