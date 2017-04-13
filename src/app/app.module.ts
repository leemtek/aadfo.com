import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Shared
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";

// Routing
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from "./app.routing";

// Pages
import { HomepageComponent } from "./main/homepage.component";
import { AboutComponent } from "./main/about.component";
  import { AboutmenuComponent } from "./main/about/aboutmenu.component";
  import { MissionComponent } from "./main/about/mission.component";
  import { OfficersComponent } from "./main/about/officers.component";
  import { ContactComponent } from "./main/about/contact.component";
import { SponsorsComponent } from "./main/sponsors.component";
import { ResourcesComponent } from "./main/resources.component";
  import { ResourcemenuComponent } from "./main/resources/resourcemenu.component";
  import { LinksComponent } from "./main/resources/links.component";

import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,

    // Main Pages
    HomepageComponent,
    AboutComponent,
      AboutmenuComponent,
      MissionComponent,
      OfficersComponent,
      ContactComponent,
    SponsorsComponent,
    ResourcesComponent,
      ResourcemenuComponent,
      LinksComponent,
    
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Routing
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
