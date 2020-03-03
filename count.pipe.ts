import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, gender:string): string {
    if(gender=="male"){
      return "Mr."+value;
    }else{
      return "Miss."+value;
    }
  }

}
