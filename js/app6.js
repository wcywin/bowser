import bowser from "bowser";


console.log('working!');

// var browserVersion = bowser.version;
// var browserName = bowser.name;
//
// if(browserName === "Chrome" || browserName === "Firefox" || browserName === "Microsoft Edge" || browserName === "Safari" || browserName === "Internet Explorer") {
//     console.log('Browser is Good!!!!');
// } else {
//     console.log('Not good Mr India!');
// }
//
// navigator.sayswho= (function(){
//     var ua= navigator.userAgent, tem,
//         M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
//     if(/trident/i.test(M[1])){
//         tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
//         return 'IE '+(tem[1] || '');
//     }
//     if(M[1]=== 'Chrome'){
//         tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
//         if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
//     }
//     M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
//     if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
//     return M.join(' ');
// })();

// console.log(navigator.sayswho); // outputs: `Chrome 62`
//
// console.log('The current browser name is: ' + browserName + ' and version: ' + browserVersion);