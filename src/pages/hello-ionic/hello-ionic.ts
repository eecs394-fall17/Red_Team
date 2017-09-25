import { Component } from '@angular/core';

@Component({
selector: 'page-hello-ionic',
templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
constructor() {

}

public ionicNamedColor: string = 'light';

buttonClick(){
var count_string = document.getElementById('count').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor === 'light') {
       this.ionicNamedColor = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count').textContent = (count_number + 1).toString();
}else{
document.getElementById('count').textContent = (count_number - 1).toString();
}

console.log(count_number);
console.log(count_string);
}


}
