import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<main></main>');
  $('main').append('<p>Dashboard data for students</p>');
  $('main').append('<button>Click here to get started</button>');
  $('main').append('<p id="count"></p>');

  $('button').on('click', _.debounce(updateCounter, 250));
})
