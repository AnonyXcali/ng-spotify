import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artists } from '../../artists';
import { Album } from '../../album';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers : [ SpotifyService]
})
export class SearchComponent {

  //input
  searchStr : string;
  searchRes : Artists[];

  constructor(
    private _spotifyService : SpotifyService
  ){}

  searchMusic(){
      this._spotifyService.searchMusic(this.searchStr)
      .debounceTime(300)
      .distinctUntilChanged()
        .subscribe(res =>{
          //console.log(res.artists.items);
          this.searchRes = res.artists.items;
        })

  }
}
/*
.subscribe(res =>{
  //console.log(res.artists.items);
  this.searchRes = res.artists.items;
})
*/
