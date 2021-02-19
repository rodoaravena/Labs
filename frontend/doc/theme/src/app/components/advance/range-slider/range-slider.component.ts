import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Options, LabelType  } from 'ng5-slider';


interface SimpleSliderModel {
  value: number;
  options: Options;
}

interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }
  
  custMinValue       : number = 10;
  custMaxValue       : number = 90;
  noSwatchMinValue   : number = 10;
  noSwatchMaxValue   : number = 90;
  limitValue         : number = 50;
  limitedMinValue    : number = 40;
  limitedMaxValue    : number = 60;
  pushRangeMinValue  : number = 60;
  pushRangemaxValue  : number = 70;
  stepValue          : number = 12;
  customHtmlMinValue : number = 100;
  customHtmlMaxValue : number = 400;
  disabledMinValue   : number = 10;
  disabledMaxValue   : number = 90;
  readOnlyValue      : number = 50;
  disabled: boolean = true;
  readOnly: boolean = true;
  dateRange: Date[] = this.createDateRange();
  valueDateRange: number = this.dateRange[0].getTime();
  simpleSliderControl: FormControl = new FormControl(100);
  rangeSliderForm: FormGroup = new FormGroup({
    rangeSliderControl: new FormControl([20, 80])
  });
  
  // Simple slider option
  simpleSliderOptions: Options = {
    floor: 0,
    ceil: 250
  };

  // Range slider option
  rangeSliderOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };

  // Custom class slider
  custSlideroptions: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  // Slider limited to 10 through 90
  sliderLimitOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minLimit: 10,
    maxLimit: 90
  };

  // Range slider with noSwitching=true
  noSwatchOption: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true
  };

  // Range slider with the range limited to 10 through 50
  limitedOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minRange: 10,
    maxRange: 50
  };

  // Range slider with minimum range of 10, maximum of 30 and pushRange option
  pushRangeOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minRange: 10,
    maxRange: 30,
    pushRange: true
  };
  
  // Slider with custom step value
  stepSlideroptions: Options = {
    floor: 10,
    ceil: 100,
    step: 5
  };

  // Slider with custom step value
  customHtmlSliderOptions: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };
  
  // Range Slider With Date
  dateRangeOptions: Options = {
    stepsArray: this.dateRange.map((date: Date) => {
      return { value: date.getTime() };
    }),
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };

  createDateRange(): Date[] {
    const dates: Date[] = [];
    for (let i: number = 1; i <= 31; i++) {
      dates.push(new Date(2018, 5, i));
    }
    return dates;
  }

  // Disabled Range Slider 
  disabledSliderOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    disabled: true,
    showTicks: true,
    draggableRange: true
  };

  onChangeDisabled(): void {
    this.disabledSliderOptions = Object.assign({}, this.disabledSliderOptions, {disabled: this.disabled});
  }

  // Read Only Range Slider 
  readOnlySliderOptions: Options = {
    floor: 0,
    ceil: 100,
    readOnly: true
  };

  onChangeReadOnly(): void {
    this.readOnlySliderOptions = Object.assign({}, this.readOnlySliderOptions, {readOnly: this.readOnly});
  }

   verticalSlider1: SimpleSliderModel = {
    value: 0,
    options: {
      floor: 0,
      ceil: 10,
      vertical: true
    }
  };

  verticalSlider2: RangeSliderModel = {
    minValue: 20,
    maxValue: 80,
    options: {
      floor: 0,
      ceil: 100,
      vertical: true
    }
  };

  verticalSlider3: SimpleSliderModel = {
    value: 5,
    options: {
      floor: 0,
      ceil: 10,
      vertical: true,
      showTicks: true
    }
  };

  verticalSlider4: RangeSliderModel = {
    minValue: 1,
    maxValue: 5,
    options: {
      floor: 0,
      ceil: 6,
      vertical: true,
      showTicksValues: true
    }
  };

  verticalSlider5: SimpleSliderModel = {
    value: 50,
    options: {
      floor: 0,
      ceil: 100,
      vertical: true,
      showSelectionBar: true
    }
  };

  verticalSlider6: SimpleSliderModel = {
    value: 6,
    options: {
      floor: 0,
      ceil: 6,
      vertical: true,
      showSelectionBar: true,
      showTicksValues: true,
      ticksValuesTooltip: (v: number): string => {
        return 'Tooltip for ' + v;
      }
    }
  };
  

}
