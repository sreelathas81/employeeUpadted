import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  firstName: number;

  constructor(private active:ActivatedRoute,private route:Router) {}
    
    public id;
    public previousname;
    public perviousStatus:boolean=true;
    public nextStatus:boolean;
    public pid
  details: any = (data as any).default;

  ngOnInit() {
    //let aaa=this.active.snapshot.paramMap.get('name');
   // this.finalName=aaa;
    this.active.paramMap.subscribe((params:ParamMap)=>{
    let aaa=params.get('id');
    this.id=aaa;
    });
  }
    
    previous(){
       this.pid=this.id-1;
      if(this.pid>0){
      this.route.navigate(['/details',this.pid]);
    }
    if(this.pid==1){
       this.perviousStatus=true;
      this.nextStatus=false;}
  }
  
    next(){
       this.pid=parseInt(this.id)+1;
      if(this.pid<=10){
        this.route.navigate(['/details',this.pid])
      }
      if(this.pid>1){
        this.perviousStatus=false;
       }if(this.pid==10){this.nextStatus=true;}

    }

}
