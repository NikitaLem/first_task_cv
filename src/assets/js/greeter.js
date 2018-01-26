import moment from '../../../node_modules/moment/moment.js';

function greet() {
    var day = moment().format('dddd');
    console.log('Have a great ' + day + "!");
};

export default greet;