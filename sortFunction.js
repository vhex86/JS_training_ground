let arr = [{name:"Олег"}, {name:"Влад"}, {name:"Игорь"}];
// console.log(arr);
arr.sort((a,b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  
} );

console.log(arr);

