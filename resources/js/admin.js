
window._ = require('lodash');


try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
} catch (e) {}


window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


window.jsscrollbar = require('jquery.scrollbar');
window.jsvalidate = require('jquery-validation');
window.moment = require('moment');
window.swal = require('sweetalert2');
window.zdt = require('datatables.net');
window.zdtbs = require('datatables.net-bs4');
window.zbsmt = require('./bootstrap-material-design');
window.zmain = require('./main');
