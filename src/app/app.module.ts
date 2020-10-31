import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module'
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabledataComponent } from './components/shared/tabledata/tabledata.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { CalltoactionComponent } from './components/calltoaction/calltoaction.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CientificoService} from './services/cientifico.service';

@NgModule({
  declarations: [
    AppComponent,
    TabledataComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    FeatureCardComponent,
    CalltoactionComponent,
    CollaboratorsComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CientificoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
