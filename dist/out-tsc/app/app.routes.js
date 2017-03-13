import { AboutComponent } from './component/about/about.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistComponent } from './component/artist/artist-component';
import { AlbumComponent } from './component/album/album-component';
export var routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'albums/:id', component: AlbumComponent }
];
//# sourceMappingURL=../../../src/app/app.routes.js.map