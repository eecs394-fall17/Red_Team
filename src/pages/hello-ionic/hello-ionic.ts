import { Component } from '@angular/core';

@Component({
selector: 'page-hello-ionic',
templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
constructor() {

}

buttonClick(){
console.log('crap');
}

}
