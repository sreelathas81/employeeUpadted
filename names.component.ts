import { Component, OnInit, Input } from '@angular/core';
import  *  as  data  from  '../data.json';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor(private http:HttpClient) { }
details: any = (data as any).default;
  info:any=[];
  //@Input() show:boolean=false;


  ngOnInit() {
    this.info=this.details;
  
  
}
  

}
