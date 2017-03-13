var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
var SearchComponent = (function () {
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyService.searchMusic(this.searchStr)
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Component({
        selector: 'search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
        providers: [SpotifyService]
    }),
    __metadata("design:paramtypes", [SpotifyService])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=../../../../../src/app/component/search/search.component.js.map