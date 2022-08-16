//Search Contact List

    //declare filer input
let filterInput = document.getElementById('filter-input');

// Add event listener

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  //get value of input
  let filterValue = document.getElementById('filter-input').value.toUpperCase();
  

  //Get names ul
  let ul = document.getElementById('names');

  //get li's from ul

  let li = ul.querySelectorAll('li.collection-item');

  //Loop throught collection item list
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    //If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue)  > -1) {
        li[i].style.display = '';
    } else {
        li[i].style.display = 'none';
    }
  }
};