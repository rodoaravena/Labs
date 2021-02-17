import { Component, OnInit } from '@angular/core';
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Basic Alert
  basicAlert() {
    Swal.fire('Any fool can use a computer')
  }

  // Alert Title
  withTitle() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }

  // Alert with Image
  withImage() {
    Swal.fire({ imageUrl: './assets/images/endless-logo.png', imageHeight: 65, imageAlt: 'A Endless Logo' })
  }

  // A modal with a title, an error icon, a text, and a footer
  error() {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  // A warning
  warning() {
    Swal.fire({
      type: 'warning',
      title: 'Warning',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // A warning
  success() {
    Swal.fire({
      type: 'success',
      title: 'Success',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Info
  info() {
    Swal.fire({
      type: 'info',
      title: 'Info',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Danger
  danger() {
    Swal.fire({
      type: 'error',
      title: 'Danger',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Custom HTML description and buttons with ARIA labels
  customHTML() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      type: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//github.com">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    })
  }

  // custom position
  customPosition() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  // Custom animation
  customAnimation() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      animation: false,
      customClass: 'animated tada'
    });
  }

  // A Custom animation
  customAlert() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      background: '#fff url(./assets/images/coming-soon-bg.jpg)',
      backdrop: `
            rgba(20, 72, 72, 0.48)
            center left
            no-repeat
          `,
           customClass: 'text-dark'
    });
  }

  // A warning message, with a function attached to the "Confirm"-button...
  withConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  // A warning message, with a function attached to the "Confirm"-button and by passing a parameter, you can execute something else for "Cancel".
  withCancelled() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  // A message with auto close timer
  autoClose() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.',
      timer: 2000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
      }
    })
  }

  // A Ajax request example
  withAjax() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }

  // Chaining modals (queue) example
  stepsAlert() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html:
            'Your answers: <pre><code>' +
            JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  // Dynamic queue example
  dynamicQueue() {
    const ipAPI = 'https://api.ipify.org?format=json'
    Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received ' +
        'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI)
          .then(response => response.json())
          .then(data => Swal.insertQueueStep(data.ip))
          .catch(() => {
            Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }])
  }

  //RTL Alert
  rtlAlert() {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      type: 'question',
      customClass: {
        icon: 'swal2-arabic-question-mark'
      },
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true
    })
  }

  //alter close after particular time
  customTimer() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html:
        'I will close in <strong></strong> seconds.<br/><br/>' +
        '<button id="increase" class="btn btn-warning">' +
        'I need 5 more seconds!' +
        '</button><br/>' +
        '<button id="stop" class="btn btn-danger">' +
        'Please stop the timer!!' +
        '</button><br/>' +
        '<button id="resume" class="btn btn-success" disabled>' +
        'Phew... you can restart now!' +
        '</button><br/>' +
        '<button id="toggle" class="btn btn-primary">' +
        'Toggle' +
        '</button>',
      timer: 10000,
      onBeforeOpen: () => {
        const content = Swal.getContent()
        const $ = content.querySelector.bind(content)

        const stop = $('#stop')
        const resume = $('#resume')
        const toggle = $('#toggle')
        const increase = $('#increase')

        Swal.showLoading()

        function toggleButtons() {
          stop.disabled = !Swal.isTimerRunning()
          resume.disabled = Swal.isTimerRunning()
        }

        stop.addEventListener('click', () => {
          Swal.stopTimer()
          toggleButtons()
        })

        resume.addEventListener('click', () => {
          Swal.resumeTimer()
          toggleButtons()
        })

        toggle.addEventListener('click', () => {
          Swal.toggleTimer()
          toggleButtons()
        })

        increase.addEventListener('click', () => {
          Swal.increaseTimer(5000)
        })

        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0)
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    })

  }

}
