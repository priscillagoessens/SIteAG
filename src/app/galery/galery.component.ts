import { Component, OnInit, Input } from '@angular/core';
import { TumblrService } from '../tumblr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  @Input()posts =[];
  loading= false; //on declare la variable quise trouve dans le html
  constructor(private tumblrService: TumblrService, private http: HttpClient) {
  };


  ngOnInit():void{
    //appel à https://api.tumblr.com/v2/blog/aliciagoessens.tumblr.com/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4
    this.loading=true; //on passe a true pour l'activé
    this.http.get('https://api.tumblr.com/v2/blog/aliciagoessens.tumblr.com/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&tag=2D').subscribe(data=>{
      console.log(data);
      this.tumblrService.tumblr = data;
      this.posts=this.tumblrService.tumblr.response.posts;
      this.loading=false; //on repasse a false
    })
  }

  onLoad(){
  }

}
