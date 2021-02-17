module.exports = {
    packages: {
      'angular2_photoswipe': {
        ignorableDeepImportMatchers: [
          /photoswipe\//,
        ]
      },
      '@ckeditor/ckeditor5-angular': {
        ignorableDeepImportMatchers: [
          /@ckeditor\//,
        ]
      },
      'ng-apexcharts': {
        ignorableDeepImportMatchers: [
          /apexcharts\//,
        ]
      },
      'ng2-ace-editor': {
        ignorableDeepImportMatchers: [
          /brace\//,
        ]
      },
      'ng5-slider': {
        ignorableDeepImportMatchers: [
          /ng5-slider\//,
        ]
      },
      'angular-custom-tour': {
        ignorableDeepImportMatchers: [
          /rxjs\//,
        ]
      },
      '@angular/platform-server': {
        ignorableDeepImportMatchers: [
          /rxjs\//,
        ]
      }
    },
  };