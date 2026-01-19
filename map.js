
//•map() = accepts a callback and applies that function
//.         to each element of an array, then return a new array

const number=[1,2,3,4,5];
const square2=number.map(square);
console.log(square2);


function square(element){
    return Math.pow(element,2);
}




const student=["abhinav","abel","rohan"];
const neww=student.map(firstletteruppercase);
console.log(neww);

function firstletteruppercase(element,index,array){
     return element.charAt(0).toUpperCase()+element.slice(1);




}




//formating dates
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map (formatDates);
console. log(formattedDates);
function formatDates (element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`}
