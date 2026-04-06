//switch
// switch (key) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     default:
//         // code to be executed if expression doesn't match any case
//         break;
// }
const month=3;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");       
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}

//switch can also be used with strings          
const day="Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    default:
        console.log("Invalid day");
        break;
}
