// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
console.log(saturdayFun()); 
console.log(saturdayFun('swim')); 

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}
console.log(mondayWork());
console.log(mondayWork('work from home'));

function wrapAdjective(flair = "*") {
    return function (adjective = "a hard worker") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
console.log(encouragingPromptFunction());
console.log(encouragingPromptFunction("a dedicated programmer"));