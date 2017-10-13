'use strict';

let img = React.createElement('img', {src: 'https://reactjs.org/img/logo.svg'})
let title = React.createElement('h1', null, 'hi React')
let subtitle = React.createElement('p', null, 'sssss')
let container = React.createElement('div', {className: 'container'}, img, title, subtitle)
ReactDOM.render(container, document.getElementById('renderPlace'));

// console.log();