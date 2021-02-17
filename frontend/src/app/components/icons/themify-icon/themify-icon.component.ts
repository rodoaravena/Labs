import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-themify-icon',
  templateUrl: './themify-icon.component.html',
  styleUrls: ['./themify-icon.component.scss']
})
export class ThemifyIconComponent implements OnInit {
  public detail: boolean = false;
  public icon: string;
  public val: string;

  directional = ["icon-arrow-up", "icon-arrow-right", "icon-arrow-left", "icon-arrow-down", "icon-arrows-vertical", "icon-arrows-horizontal", "icon-angle-up", "icon-angle-right", "icon-angle-left", "icon-angle-down", "icon-angle-double-up", "icon-angle-double-right", "icon-angle-double-left", "icon-angle-double-down", "icon-move", "icon-fullscreen", "icon-arrow-top-right", "icon-arrow-top-left", "icon-arrow-circle-up", "icon-arrow-circle-right", "icon-arrow-circle-left", "icon-arrow-circle-down", "icon-arrows-corner", "icon-split-v", "icon-split-v-alt", "icon-split-h", "icon-hand-point-up", "icon-hand-point-right", "icon-hand-point-left", "icon-hand-point-down", "icon-back-right", "icon-back-left", "icon-exchange-vertical"]
  webapp = ["icon-wand", "icon-save", "icon-save-alt", "icon-direction", "icon-direction-alt", "icon-user", "icon-link", "icon-unlink", "icon-trash", "icon-target", "icon-tag", "icon-desktop", "icon-tablet", "icon-mobile", "icon-email", "icon-star", "icon-spray", "icon-signal", "icon-shopping-cart", "icon-shopping-cart-full", "icon-settings", "icon-search", "icon-zoom-in", "icon-zoom-out", "icon-cut", "icon-ruler", "icon-ruler-alt-2", "icon-ruler-pencil", "icon-ruler-alt", "icon-bookmark", "icon-bookmark-alt", "icon-reload", "icon-plus", "icon-minus", "icon-close", "icon-pin", "icon-pencil", "icon-pencil-alt", "icon-paint-roller", "icon-paint-bucket", "icon-na", "icon-medall", "icon-medall-alt", "icon-marker", "icon-marker-alt", "icon-lock", "icon-unlock", "icon-location-arrow", "icon-layout", "icon-layers", "icon-layers-alt", "icon-key", "icon-image", "icon-heart", "icon-heart-broken", "icon-hand-stop", "icon-hand-open", "icon-hand-drag", "icon-flag", "icon-flag-alt", "icon-flag-alt-2", "icon-eye", "icon-import", "icon-export", "icon-cup", "icon-crown", "icon-comments", "icon-comment", "icon-comment-alt", "icon-thought", "icon-clip", "icon-check", "icon-check-box", "icon-camera", "icon-announcement", "icon-brush", "icon-brush-alt", "icon-palette", "icon-briefcase", "icon-bolt", "icon-bolt-alt", "icon-blackboard", "icon-bag", "icon-world", "icon-wheelchair", "icon-car", "icon-truck", "icon-timer", "icon-ticket", "icon-thumb-up", "icon-thumb-down", "icon-stats-up", "icon-stats-down", "icon-shine", "icon-shift-right", "icon-shift-left", "icon-shift-right-alt", "icon-shift-left-alt", "icon-shield", "icon-notepad", "icon-server", "icon-pulse", "icon-printer", "icon-power-off", "icon-plug", "icon-pie-chart", "icon-panel", "icon-package", "icon-music", "icon-music-alt", "icon-mouse", "icon-mouse-alt", "icon-money", "icon-microphone", "icon-menu", "icon-menu-alt", "icon-map", "icon-map-alt", "icon-location-pin", "icon-light-bulb", "icon-info", "icon-infinite", "icon-id-badge", "icon-hummer", "icon-home", "icon-help", "icon-headphone", "icon-harddrives", "icon-harddrive", "icon-gift", "icon-game", "icon-filter", "icon-files", "icon-file", "icon-zip", "icon-folder", "icon-envelope", "icon-dashboard", "icon-cloud", "icon-cloud-up", "icon-cloud-down", "icon-clipboard", "icon-calendar", "icon-book", "icon-bell", "icon-basketball", "icon-bar-chart", "icon-bar-chart-alt", "icon-archive", "icon-anchor", "icon-alert", "icon-alarm-clock", "icon-agenda", "icon-write", "icon-wallet", "icon-video-clapper", "icon-video-camera", "icon-vector", "icon-support", "icon-stamp", "icon-slice", "icon-shortcode", "icon-receipt", "icon-pin2", "icon-pin-alt", "icon-pencil-alt2", "icon-eraser", "icon-more", "icon-more-alt", "icon-microphone-alt", "icon-magnet", "icon-line-double", "icon-line-dotted", "icon-line-dashed", "icon-ink-pen", "icon-info-alt", "icon-help-alt", "icon-headphone-alt", "icon-gallery", "icon-face-smile", "icon-face-sad", "icon-credit-card", "icon-comments-smiley", "icon-time", "icon-share", "icon-share-alt", "icon-rocket", "icon-new-window", "icon-rss", "icon-rss-alt"]
  control = ["icon-control-stop", "icon-control-shuffle", "icon-control-play", "icon-control-pause", "icon-control-forward", "icon-control-backward", "icon-volume", "icon-control-skip-forward", "icon-control-skip-backward", "icon-control-record", "icon-control-eject"]
  texteditor = ["icon-paragraph", "icon-uppercase", "icon-underline", "icon-text", "icon-Italic", "icon-smallcap", "icon-list", "icon-list-ol", "icon-align-right", "icon-align-left", "icon-align-justify", "icon-align-center", "icon-quote-right", "icon-quote-left"]
  brand = ["icon-flickr", "icon-flickr-alt", "icon-instagram", "icon-google", "icon-github", "icon-facebook", "icon-dropbox", "icon-dropbox-alt", "icon-dribbble", "icon-apple", "icon-android", "icon-yahoo", "icon-trello", "icon-stack-overflow", "icon-soundcloud", "icon-sharethis", "icon-sharethis-alt", "icon-reddit", "icon-microsoft", "icon-microsoft-alt", "icon-linux", "icon-jsfiddle", "icon-joomla", "icon-html5", "icon-css3", "icon-drupal", "icon-wordpress", "icon-tumblr", "icon-tumblr-alt", "icon-skype", "icon-youtube", "icon-vimeo", "icon-vimeo-alt", "icon-twitter", "icon-twitter-alt", "icon-linkedin", "icon-pinterest", "icon-pinterest-alt", "icon-themify-logo", "icon-themify-favicon", "icon-themify-favicon-alt"]

  constructor(private toastrService: ToastrService) { }

  //Display Icon detail
  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="' + icon + '"></i>';
  }

  //Copy an icon code
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }

  ngOnInit() { }

}
