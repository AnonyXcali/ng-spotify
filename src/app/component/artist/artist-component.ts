import { Component , OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album} from '../../album';
import { Artists } from '../../artists';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'artist',
  templateUrl: './artist-component.html',
  styleUrls: ['./artist-component.css'],
  providers : [SpotifyService]
})
export class ArtistComponent implements OnInit{

     id: string;
     artist : Artists[];
     albums : Album[];

    constructor(
      private _spotifyService : SpotifyService,
      private _route : ActivatedRoute
    ){}

    ngOnInit(){
      /*this._route.params
        .map(params=>params['id'])
          .subscribe((id)=>{
            this._spotifyService.getArtist(id)
              .subscribe(artist => {
                this.artist = artist;
              })
          })*/
          //this.artist = this._spotifyService.getArtist(this._route.snapshot.params.id);
           this._route.params
           .map(params => params['id'])
           .switchMap(id => this._spotifyService.getArtist(id))
           .subscribe(artist => this.artist = artist);
    }

    /*
    ngOnInit() {
    this.contact = this.contactsService.getContact(this.route.snapshot.params.id);
  }
  ngOnInit() {
this.route.params
.map(params => params['id'])
.switchMap(id => this.contactsService.getContact(id))
.subscribe(contact => this.contact = contact);
}

    */

}
