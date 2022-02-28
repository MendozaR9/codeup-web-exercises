var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));

function removeAll(bugs, removeBugs){
    let filterbugs =[];
    bugs.forEach(function (ele){
        if (removeBugs !== ele){
            filterbugs.push(ele)
        }
    });
    return filterbugs
}

    // return  bugs.indexOf(removeBugs);
// should print
// [
//     'mosquito',
//     'scorpion',
//     'mosquito',
//     'typo',
//     'reference error',
//     'type error'
// ]