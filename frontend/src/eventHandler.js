import { init, initSize, char} from './functions.js'
import { translate } from './api.js'
export const clickEventHandler = (e) => {
  e.preventDefault();
  const rowAmmount = 1;
  const getTotalRows = $('table > tbody').children().length;
  for (let i = -1; i < rowAmmount-1; i++) {
    const row = document.getElementById("row"); // find row to copy
    const table = document.getElementById("table"); // find table to append to
    const clone = row.cloneNode(true); // copy children too
    clone.id = "newRow" + (getTotalRows + i); // change id or other attributes/contents
    clone.classList.remove('hidden');
  
    table.appendChild(clone); // add new row to end of table
    $('#newRow' + (getTotalRows + i)).children().each(function() {
      $(this).children().val('').end();
      $(this).children().attr('id', $(this).children().attr('id') + (getTotalRows + i));
    });
  } 
}

export const submitEventHandler = async (e) => {
  e.preventDefault();
  const dataArray = new Array();
  const data = {
    name: document.getElementById('name').value?document.getElementById('name').value:'',
    color: document.getElementById('color').value?document.getElementById('color').value:'',
    size: document.getElementById('size').value?document.getElementById('size').value:'',
    price: document.getElementById('price').value?document.getElementById('price').value:'',
  };
  if(data) {
    dataArray.push(data);
  }

  const trs = document.querySelectorAll('#table > tr');
  for(let i = 0; i<trs.length-1; i++) {
    let data = {
      name: document.getElementById(`name${i}`).value?document.getElementById(`name${i}`).value:'',
      color: document.getElementById(`color${i}`).value?document.getElementById(`color${i}`).value:'',
      size: document.getElementById(`size${i}`).value?document.getElementById(`size${i}`).value:'',
      price: document.getElementById(`price${i}`).value?document.getElementById(`price${i}`).value:''
    };
    if(data) {
      dataArray.push(data);
    }
  }
  const istr = document.querySelectorAll('.form-container tbody tr');
  if(istr.length>0) {
    for(let i=0; i<istr.length; i++) {
      istr[i].remove();
    }
  }
  //console.log(dataArray); 동기적
  let returnArr = new Array();
  for (let data of dataArray) {
    let name = data.name;
    if(name!=="") {
    let namermbr = name.split(" ")[1]+name.split(" ")[2];
    let nameOrg = namermbr.split(" /")[0];
    let color = data.color;
    let transName = await translate(nameOrg+'%'+color);
    let transColor = transName.replace(/ /g,"").split("%")[1];
    let size = data.size;
    let price = data.price;

    let first = init(name);
    let second = char(transName);
    let third = transColor.toUpperCase();
    let thirdOrg = third.substr(0,2);
    let forth = initSize(size);

    if(forth ==='XXS'|| forth ==='XS'|| forth ==='S'|| forth ==='M'|| forth ==='L'|| forth ==='XL' || forth ==='XXL') {
      forth = forth;
    } else if(forth === ""|| forth === 0) {
      forth = "";
    } else {
      forth = "S" + forth;
    }
    let code = first + second + thirdOrg + price + forth;
    console.log(code);
    returnArr.push(code)
    }
  };
  console.log(returnArr);
  const tbody = document.querySelector('.form-container tbody');
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  returnArr.map(r => {
    tr.appendChild(td); 
    td.innerHTML = r; 
    return tbody.appendChild(tr);
  })
}

