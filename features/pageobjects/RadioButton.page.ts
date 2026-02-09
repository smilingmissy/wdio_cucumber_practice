import { $ } from '@wdio/globals';
import Page from './page.js';

class RadioButtonPage extends Page {
  
  getRadioButton(option: string) {
   return $(`#${option.toLowerCase()}`);}

  getAllRadioButtons() {     return [
      $('#blue'),
      $('#red'),
      $('#yellow'),
      $('#black'),
      $('#green')
    ];
  }

  getColorRadios() {
    return [
      $('#blue'),
      $('#red'),
      $('#yellow'),
      $('#black'),
      $('#green')
    ];
  }

  getSportRadios() {
      return [
        $('#basketball'),
        $('#football'),
        $('#tennis')
      ];
  }

}


export default new RadioButtonPage();
