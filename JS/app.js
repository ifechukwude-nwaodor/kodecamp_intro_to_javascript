//question 1
document.querySelector('.team-name').innerHTML = "Hermes"
document.querySelector('.team-name').style.color = "rgb(116, 44, 94)"
//question 2
var teamMembers =["CodeGiyu", "Natacha", "Ifechukwude", "DeeVee","Fawsiyyah", "Adedamola", "Michael"];
console.log(teamMembers[2]);

//question 3
var profile = {
    "firstName": "Ifechukwude",
    "lastName": "Nwaodor",
    "bestMovie": "Titanic",
    "bestFood": "friedRice",
    "complexion":"light",
    "birthMonth":"April",
    "state":"Delta",
    "groupName":"Hermes"
}
var bestmovie = profile.bestMovie;
console.log(bestmovie)
//question 4
var noun = "London";
var verb = "rained";
var adjective = "beautiful";

let firstSentence = noun + " was " + verb + " on" + ".";
let secondSentence = "How " + adjective + " it" + " is" + " in "  + noun +".";
let thirdSentence = noun + " is" + " the" + " most" + " " + adjective + " city" + " in" + " the" + " world" +"."
let fourthSentence = "It " + verb + " yesterday" + " and" + " it" + " was " +  adjective +".";
let fifthSentence = "The" + " flowers" + " in "+ noun + " look " + adjective + " today" + " because" + " it "+ verb + " this" + " morninig" +".";
console.log(firstSentence);
console.log(secondSentence);
console.log(thirdSentence);
console.log(fourthSentence);
console.log(fifthSentence);


//question 5
function remainder(a,b){
    return a%b;
}

console.log(remainder(14,5));

//question 6
function quadracticFormula(a,b,c){
    var discriminant= Math.pow(b,2) - (4 * a * c);
    let firstroot=((-1 * b) + Math.sqrt(discriminant))/(2 * a);
    let secondroot=((-1 * b) - Math.sqrt(discriminant))/(2 * a);

    return "the roots of the equation are " + firstroot + " and " + secondroot + ".";
}

console.log(quadracticFormula(1, 6, 9));

//question 7 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly"
const myDeterminer = "The"

let sentence = myDeterminer + " " +  myAdjective + " " +  myNoun + " " +  myVerb + " "  + myAdverb +".";
console.log(sentence);

//question 8
function areaOfCircle(r){
    const pi= 3.142;
    let area = pi * (Math.pow(r,2))

    return "the" + " area" + " is" + " " + area+"."
}
console.log(areaOfCircle(9))

//question 9
function simpleInterest(P, R,T){
    let interest =(P*R*T)/100;
    return "The " + " interest" + " is" + " " +  interest+"."
}
console.log(simpleInterest(8200, 17.5, 2.5));

//question 10
function remainder(a, b){
    return a%b
}
console.log(remainder(10, 4))

//question 11
//data 1
var N_height = 1.95;
var N_weight = 92;
var M_height = 1.69;
var M_weight = 78;
let M_BMI = M_weight/(M_height*M_height);
console.log(M_BMI)

let N_BMI = N_weight/(N_height*N_height);
console.log(N_BMI)

const meritHigherBMI = M_BMI > N_BMI;
console.log(meritHigherBMI);

//data 2
var N_height2 = 1.88;
var N_weight2 = 95;
var M_height2 = 1.76;
var M_weight2 = 85;
let M_BMI2 = M_weight2/(M_height2*M_height2);
console.log(M_BMI2)

let N_BMI2 = N_weight2/(N_height2*N_height2);
console.log(N_BMI2)

const meritHigherBMI2 = M_BMI2 > N_BMI2;
console.log(meritHigherBMI2);