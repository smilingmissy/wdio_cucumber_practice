import { $ } from '@wdio/globals';
import Page from './page.js';

class RadioButtonPage extends Page {
   public open () {
        return super.open('radio-buttons');
    }
    
  // Color Radio Buttons 
  get blue() { return $('#blue'); }
  get red() { return $('#red'); }
  get yellow() { return $('#yellow'); }
  get black() { return $('#black'); }
  get green() { return $('#green'); }

   //Sports Radio Buttons 
  get basketball() { return $('#basketball'); }
  get football() { return $('#football'); }
  get tennis() { return $('#tennis'); }

  getRadioButton(option: string) {
    const radios: Record<string, ChainablePromiseElement> = {
      Blue: this.blue,
      Red: this.red,
      Yellow: this.yellow,
      Black: this.black,
      Green: this.green,
      Basketball: this.basketball,
      Football: this.football,
      Tennis: this.tennis,
    };

    return radios[option];
  }

  getAllRadioButtons() { return [ this.blue, this.red, this.yellow, this.black, this.green, this.basketball, this.football, this.tennis, ]; }

  getColorRadios() {
     return [this.blue,this.red,this.yellow,this.black,this.green,];
  }

  getSportRadios() {
      return [this.basketball,this.football,this.tennis, ];
  }

}


export default new RadioButtonPage();
