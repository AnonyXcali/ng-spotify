import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent} from './component/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { RouterModule,Routes } from '@angular/router';
import { routes } from './app.routes';
import { SearchComponent } from './component/search/search.component';
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './component/artist/artist-component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
