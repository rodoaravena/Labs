import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatherIconComponent implements OnInit {

  public detail: boolean = false;
  public ficon: string;
  public val: string;
  public notification: boolean = false;
  feather_icons = ["activity", "airplay", "alert-circle", "alert-octagon", "alert-triangle", "align-center", "align-justify", "align-left", "align-right", "anchor", "aperture", "archive", "arrow-down-circle", "arrow-down-left", "arrow-down-right", "arrow-down", "arrow-left-circle", "arrow-left", "arrow-right-circle", "arrow-right", "arrow-up-circle", "arrow-up-left", "arrow-up-right", "arrow-up", "at-sign", "award", "bar-chart-2", "bar-chart", "battery-charging", "battery", "bell-off", "bell", "bluetooth", "bold", "book-open", "book", "bookmark", "box", "briefcase", "calendar", "camera-off", "camera", "cast", "check-circle", "check-square", "check", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard", "clock", "cloud-drizzle", "cloud-lightning", "cloud-off", "cloud-rain", "cloud-snow", "cloud", "code", "codepen", "coffee", "command", "compass", "copy", "corner-down-left", "corner-down-right", "corner-left-down", "corner-left-up", "corner-right-down", "corner-right-up", "corner-up-left", "corner-up-right", "cpu", "credit-card", "crop", "crosshair", "database", "delete", "disc", "dollar-sign", "download-cloud", "download", "droplet", "edit-2", "edit-3", "edit", "external-link", "eye-off", "eye", "facebook", "fast-forward", "feather", "file-minus", "file-plus", "file-text", "file", "film", "filter", "flag", "folder-minus", "folder-plus", "folder", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid", "hard-drive", "hash", "headphones", "heart", "help-circle", "home", "image", "inbox", "info", "instagram", "italic", "layers", "layout", "life-buoy", "link-2", "link", "linkedin", "list", "loader", "lock", "log-in", "log-out", "mail", "map-pin", "map", "maximize-2", "maximize", "menu", "message-circle", "message-square", "mic-off", "mic", "minimize-2", "minimize", "minus-circle", "minus-square", "minus", "monitor", "moon", "more-horizontal", "more-vertical", "move", "music", "navigation-2", "navigation", "octagon", "package", "paperclip", "pause-circle", "pause", "percent", "phone-call", "phone-forwarded", "phone-incoming", "phone-missed", "phone-off", "phone-outgoing", "phone", "pie-chart", "play-circle", "play", "plus-circle", "plus-square", "plus", "pocket", "power", "printer", "radio", "refresh-ccw", "refresh-cw", "repeat", "rewind", "rotate-ccw", "rotate-cw", "rss", "save", "scissors", "search", "send", "server", "settings", "share-2", "share", "shield-off", "shield", "shopping-bag", "shopping-cart", "shuffle", "sidebar", "skip-back", "skip-forward", "slack", "slash", "sliders", "smartphone", "speaker", "square", "star", "stop-circle", "sun", "sunrise", "sunset", "tablet", "tag", "target", "terminal", "thermometer", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "trash-2", "trash", "trending-down", "trending-up", "triangle", "truck", "tv", "twitter", "type", "umbrella", "underline", "unlock", "upload-cloud", "upload", "user-check", "user-minus", "user-plus", "user-x", "user", "users", "video-off", "video", "voicemail", "volume-1", "volume-2", "volume-x", "volume", "watch", "wifi-off", "wifi", "wind", "x-circle", "x-square", "x", "youtube", "zap-off", "zap", "zoom-in", "zoom-out"]

  constructor(private toastrService: ToastrService) { }

  //Display Icon detail
  toggleWithInfo(icon: string) {
    this.detail = true;
    this.ficon = icon;
    this.val = '<i data-feather=' + icon + '"></i>';
  }

  //Copy an icon code
  copyText(val: string) {
    this.notification = true
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '' + val + '';
    selBox.value = '<i data-feather=' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }

  ngOnInit() { }

}