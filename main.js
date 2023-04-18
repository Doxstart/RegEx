console.log("ESERCIZIO: Riconoscere ID delle riunioni di Google Meet")

//let meetId = /[a-z][a-z][a-z]-[a-z][a-z][a-z][a-z]-[a-z][a-z][a-z]/
let meetId = /[a-z]{3}-[a-z]{4}-[a-z]{3}/ //modo semplificato di prima
testRegex(meetId, 'ikz-tjrf-igh'); //true
testRegex(meetId, 'mmf-tire-sgm'); //true
testRegex(meetId, 'mmf-aaaaaa-sgmaaaa'); //false
testRegex(meetId, '____mmf-tire-sgm'); //true
testRegex(meetId, 'm_f-tire-sgm'); //false

console.log('\nESERCIZIO: Riconoscere una data (semplificata)');
//let datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/
//let datePattern = /^\d{1,2}\/\d{1,2}\/\d+$/ //d+ vuol dire avere un digito almeno una volta
//let datePattern = /^\d{1,2}\/\d{1,2}\/\d*$/ //d* vuol dire che può avere 0 o più cose inserite
let datePattern = /^\d{1,2}\/\d{1,2}\/\d+( [ad]\.c\.[a-z])?$/ 
testRegex(datePattern, '10/3/2023'); //true
testRegex(datePattern, '11/10/1992'); //true
testRegex(datePattern, '5/5/1800'); //true
testRegex(datePattern, '500/10/10000'); //false
testRegex(datePattern, '10-03-2002'); //false
testRegex(datePattern, ' 10/03/2002 '); //false
testRegex(datePattern, '10/03/200'); //true
testRegex(datePattern, '1/6/'); //true
testRegex(datePattern, '1/6/300 a.c.'); //true
testRegex(datePattern, '2/6/300 d.c.'); //true
testRegex(datePattern, '1/6/300 d.c'); //false, perchè la condizione non si compie totalmente senza il (.)

console.log('\nESERCIZIO: Riconoscere un dominio (+ porta)');
//let domainPattern = /^(\w*-?\w*[.:-]?\w*?)\.?\w{2}?(:\d+)?$/;
let domainPattern = /^[a-zA-Z\d][\w\-]*(\.[a-zA-Z]+)*(:\d+)?$/;
testRegex(domainPattern, 'google.com'); //true
testRegex(domainPattern, 'localhost:8080'); //true
testRegex(domainPattern, 'english-site.co.uk:21'); //true
testRegex(domainPattern, 'localhost:'); //false
testRegex(domainPattern, 'personal-home-page.it'); //true
testRegex(domainPattern, '.page.it'); //false
testRegex(domainPattern, 'localhost'); //true
testRegex(domainPattern, 'a'); //true
testRegex(domainPattern, '_site.com'); //false
testRegex(domainPattern, '-site.com'); //false

function testRegex(pattern, string){
    console.log("Testing string '" + string + "': " + pattern.test(string));
}

let hoursPattern = /^\d{1,2}:\d{2}( (am|pm))?$/iu;
console.log('Hours: ' + hoursPattern.test('3:12 pM'));

