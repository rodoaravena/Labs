import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-ngx-toastr',
    templateUrl: './ngx-toastr.component.html',
    styleUrls: ['./ngx-toastr.component.scss']
})
export class NgxToastrComponent implements OnInit {

    constructor(private toastrService: ToastrService) { }

    ngOnInit() { }

    // Success Type
    success() {
        this.toastrService.success('You are awesome!', 'Success!');
    }

    // info Type
    info() {
        this.toastrService.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    }

    // warning Type
    warning() {
        this.toastrService.warning('My name is John Dio. You killed my father, prepare to die!');
    }

    // danger Type
    danger() {
        this.toastrService.error('I do not think that word means what you think it means.', 'Inconceivable!');
    }

    // Timeout
    timeout() {
        this.toastrService.error('I do not think that word means what you think it means.', 'Timeout!', { timeOut: 2000 });
    }

    // Dismiss toastr on Click
    dismissToastOnClick() {
        this.toastrService.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { tapToDismiss: true });
    }


    // Show close button
    showCloseButton() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { closeButton: true });
    }

    // Show Progressbar
    showProgressbar() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { progressBar: true });
    }

    // Title Class
    titleClass() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    }
    // Message Class
    messageClass() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    }

    // Enable HTML
    enableHtml() {
        this.toastrService.show('<p class="mb-0 mt-1">We do have the Kapua suite available.</p>', 'Custom', {
            enableHtml: true
        });
    }

    // custom position
    position() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', {
            positionClass: 'toast-top-center'
        });
    }
}
