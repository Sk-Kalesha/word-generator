import { Component } from '@angular/core';
import arrayWords from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'word-generator';

  words = '';
  limit = 10;
  randomNumber = (Math.ceil(Math.random()*100));

  handleSlideChange(newLimit: any){    
    this.limit = newLimit.target.value;
  }

  generateRandomWords(){
    this.words = arrayWords.slice(0, this.randomNumber).join(' ');  
    this.randomNumber = (Math.ceil(Math.random()*100))  
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}