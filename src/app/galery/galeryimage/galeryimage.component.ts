import { Component, OnInit,Input, Output} from '@angular/core';
import { trigger,state,style,transition,animate} from '@angular/animations';



@Component({
  selector: 'app-galeryimage',
  templateUrl: './galeryimage.component.html',
  styleUrls: ['./galeryimage.component.css'],
  animations:[
    trigger('baniereState',[
      state('inactive', style({
        opacity: 0,               //style css
        transform: 'scale(1)'
      })),
      state('active',style({
        opacity: 1,
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('300ms ease-in'))
    ]),

    trigger('imageState',[
      state('inactive', style({
        transform: 'scale(1)'               //style css
      })),
      state('active',style({
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('300ms ease-in'))
    ]),

    trigger('imgState',[
      state('active', style({
        transform: 'scale(2)'
      })),
    ]),
  ]
})


export class GaleryimageComponent implements OnInit {
  bstate= 'inactive';  //par defaut il sera inactif
  imgstate='inactive';
  imgclick="inactive";
  @Input() post;

constructor(){ }
  ngOnInit() {
  }
  over(){
      this.bstate = 'active';
      this.imgstate = 'active';
  }
  out(){
      this.bstate = 'inactive';
      this.imgstate = 'inactive';
  }
  onClick(){
    console.log("click");
    this.imgclick="active";
  }

}
