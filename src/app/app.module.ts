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

import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,

    // Main Pages
    HomepageComponent,
    AboutComponent,
    
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
