import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-social-app',
  templateUrl: './social-app.component.html',
  styleUrls: ['./social-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialAppComponent implements OnInit {
  public url: any;
  public isProfile = false;
  public isMutualFriend = false;
  public isActiveFeed = false;
  public isIntroProfile = false;
  public isFollowers = false;
  public isFollowings = false;
  public isLatestPhotos = false;
  public isFriends = false;

  constructor() { }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

  ngOnInit() { }

}
