import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<div id="logo"></div>');
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - ALX</p>');

  $('button').on('click', _.debounce(updateCounter, 250));
})
