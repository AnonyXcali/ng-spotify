import { Component , OnInit ,OnDestroy } from '@angular/core';
import { Album } from '../../album';
import { Artists } from '../../artists';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'album',
  templateUrl: './album-component.html',
  styleUrls: ['./album-component.css'],
  providers : [SpotifyService]
})
export class AlbumComponent implements OnInit, OnDestroy {

      id : string;
     albums : Album[];
     artist : Artists[];

  constructor (
    private _spotifyService : SpotifyService,
    private _route : ActivatedRoute
  ){}

  ngOnInit(){

      this._route.params
        .map( params => params['id'])
        .switchMap(id => this._spotifyService.getAlbumUrl(id))
        .subscribe( albums => this.albums = albums)
  }

  ngOnDestroy(){

  }

}
