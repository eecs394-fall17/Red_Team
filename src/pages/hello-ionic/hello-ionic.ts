import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
selector: 'page-hello-ionic',
templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

data: Array<{ details: string, icon: string, showDetails: boolean}> = [];
data1: Array<{ details: string, icon: string, showDetails: boolean}> = [];
data2: Array<{ details: string, icon: string, showDetails: boolean}> = [];
data3: Array<{ details: string, icon: string, showDetails: boolean}> = [];
data4: Array<{ details: string, icon: string, showDetails: boolean}> = [];
data5: Array<{ details: string, icon: string, showDetails: boolean}> = [];
data6: Array<{ details: string, icon: string, showDetails: boolean}> = [];



constructor(public navCtrl: NavController) {
this.data.push({
details: 'The first round of Club Tennis Tryouts will be held at SPAC and last 3 hours.',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data1.push({
details: 'Mr.Smith will be hosting a creative writing workshop in Fisk 102. The theme is Halloween.',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data2.push({
details: 'The Chinese Students Association is giving out free dumplings by the arch from 11am to 3pm in honor of the New Year. ',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data3.push({
details: 'Representatives from Microsoft headquarters will be available to answer questions and accept resumes from 12pm to 2pm in Tech LR4',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data4.push({
details: 'NU Tutors is looking to hire more staff. Come to Annenberg Room 21 to hear more!',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data5.push({
details: 'The all male Acapella group will be performing their first show of 2017 tonight in the Norris Louis Room',
icon: 'ios-add-circle-outline',
showDetails: false
});

this.data6.push({
details: 'Do you like improv? Do you like to laugh? Come checkout NSTV and meet individuals involved in improv groups on campus!',
icon: 'ios-add-circle-outline',
showDetails: false
});
}

 toggleDetails(data) {
   if (data.showDetails) {
       data.showDetails = false;
       data.icon = 'ios-add-circle-outline';
   } else {
       data.showDetails = true;
       data.icon = 'ios-remove-circle-outline';
   }
 }

public ionicNamedColor: string = 'light';
public ionicNamedColor1: string = 'light';
public ionicNamedColor2: string = 'light';
public ionicNamedColor3: string = 'light';
public ionicNamedColor4: string = 'light';
public ionicNamedColor5: string = 'light';
public ionicNamedColor6: string = 'light';

buttonClick(){
var count_string = document.getElementById('count').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor == 'light') {
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

}


buttonClick1(){
var count_string = document.getElementById('count1').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor1 == 'light') {
       this.ionicNamedColor1 = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor1 = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count1').textContent = (count_number + 1).toString();
}else{
document.getElementById('count1').textContent = (count_number - 1).toString();
}
}

buttonClick2(){
var count_string = document.getElementById('count2').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor2 == 'light') {
       this.ionicNamedColor2 = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor2 = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count2').textContent = (count_number + 1).toString();
}else{
document.getElementById('count2').textContent = (count_number - 1).toString();
}
}

buttonClick3(){
var count_string = document.getElementById('count3').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor3 == 'light') {
       this.ionicNamedColor3 = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor3 = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count3').textContent = (count_number + 1).toString();
}else{
document.getElementById('count3').textContent = (count_number - 1).toString();
}
}

buttonClick4(){
var count_string = document.getElementById('count4').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor4 == 'light') {
       this.ionicNamedColor4 = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor4 = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count4').textContent = (count_number + 1).toString();
}else{
document.getElementById('count4').textContent = (count_number - 1).toString();
}
}

buttonClick5(){
var count_string = document.getElementById('count5').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor5 == 'light') {
       this.ionicNamedColor5 = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor5 = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count5').textContent = (count_number + 1).toString();
}else{
document.getElementById('count5').textContent = (count_number - 1).toString();
}
}

buttonClick6(){
var count_string = document.getElementById('count6').textContent;
var count_number = Number(count_string);
let clicked : boolean = false;

if(this.ionicNamedColor6 == 'light') {
       this.ionicNamedColor6 = 'secondary';
       clicked = true;
     } else {
       this.ionicNamedColor6 = 'light';
       clicked = false;
     }

if (clicked == true){
document.getElementById('count6').textContent = (count_number + 1).toString();
}else{
document.getElementById('count6').textContent = (count_number - 1).toString();
}
}

}
