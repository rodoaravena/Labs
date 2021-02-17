import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent implements OnInit {

  // Map1
  public lat_m1: number =  20.593683;
  public lng_m1: number = 78.962883;
  public zoom_m1: number = 4;
  
  //Map2
   public lat_m2: number = 52.5159;
   public lng_m2: number = 13.3777;
   public zoom_m2: number = 14;

   //Map3
   public lat_m3:number =34.552942;
   public lng_m3:number=112.690597;
   public zoom_m3: number = 6;

   //Map4
   public lat_m4:number =27.98805
   public lng_m4:number=86.9250;
   public zoom_m4: number = 10;
 
   //Map5
   public lat_m5: number = 42.3572;
   public lng_m5: number = -71.0596;
   public zoom_m5: number = 4;
   public lat_m5_c1: number = 41.4822;
   public lng_m5_c1: number = -81.6697;
   public lat_m5_c2: number = 37.090240;
   public lng_m5_c2: number = -95.712891;
 
    //Map6
   public lat_m6: number = 10;
   public lng_m6: number = 10;
   public zoom_m6: number = 5;
   public paths_m6: Array<LatLngLiteral> = [
    { lat: 0,  lng: 10 },
    { lat: 0,  lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0,  lng: 10 }
  ]
 
   //Map7
  public lat_m7: number = 52.5159;
  public lng_m7: number = 13.3777;
  public zoom_m7: number = 14;
  public markerDragEnd(m: marker, $event: MouseEvent) {  }

   //Map8
  public lat_m8: number = 52.5159;
  public lng_m8: number = 13.3777;
  public zoom_m8: number = 3;
  public lat_m8_A: number = 53.3477;
  public lng_m8_A: number = -6.2597;

  public lat_m8_B: number = 51.5008;
  public lng_m8_B: number = -0.1224;
  
  public lat_m8_c: number = 48.8567;
  public lng_m8_c: number = 2.3508;

  public lat_m8_d: number = 52.5166;
  public lng_m8_d: number = 13.3833;
  public strokecolor_m8="#0000FF";
  public strokewidth_m8=4;

  //Map9
  public lat_m9: number = 52.5159;
  public lng_m9: number = 13.3777;
  public zoom_m9: number = 2;
  public fillcolor_m9="#FFFFCC";
  public strokeColor_m9="#829";
  public pstrokeweight_m9=8;
  public fillOpacity_m9=1;
  public paths_m9: Array<LatLngLiteral> = [
    { lat: 52,  lng:40 },
    { lat: 40,  lng: 13 },
    { lat: 13, lng:50 }
  ] 

  //Map10
  public lat_m10: number = 42.3572;
  public lng_m10: number = -81.6697;
  public zoom_m10: number = 4;
  public lat_m10_c1: number = 37.090240;
  public lng_m10_c1: number = -95.712891;

  public markers: marker[] = [
	  {
		  lat: 52.5159,
		  lng: 13.3777,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 52.5159,
		  lng: 13.3730,
		  label: 'B',
		  draggable: true
	  },
	  {
		  lat: 52.5059,
		  lng: 13.3771,
		  label: 'C',
		  draggable: true
	  }
  ]

constructor() { }

public mapClicked(e) { }

ngOnInit() {  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

interface LatLngLiteral {
  lat: number;
  lng: number;
}

