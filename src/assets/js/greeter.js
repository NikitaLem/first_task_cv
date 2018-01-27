import moment from '../../../node_modules/moment/moment.js';

function greet() {
    var day = moment().format('dddd');
    console.log('Have a great ' + day + "! Now we have a server!");
};

export default greet;