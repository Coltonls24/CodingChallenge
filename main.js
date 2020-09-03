/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here
let organizedEmployees = {};
let groups = [... new Set(employees.map(x => x.group))];

groups.forEach(group => {
    organizedEmployees[group] = [...
        employees.filter(employee => employee.group === group)
        .map(employee => employee.nameOrder === "reverse" ? employee.last + ' ' + employee.first : employee.first + ' ' + employee.last)
    ] 
});

return organizedEmployees;

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
