import { Client } from "./Client";
 
var customers = new Client;
var ul = document.getElementById("customer-list");

function saveData(event) {
  event.preventDefault();

  const formEl = event.target;

  let company = formEl.companyName.value;
  let nip = formEl.nip.value;
  let city = formEl.city.value;
  let street = formEl.street.value;
  let comments = formEl.comments.value;
  let industry = formEl.industry.value;
  let active = formEl.active.value;

  var customer = new Client(company, nip, city, comments, street, active, industry);
  console.log(customer);
  customers.push(customer);
  showList();
}

function showForm() {
  var form = document.getElementById("myForm");
  if(form)
    form.style.display = "block";
  var list = document.getElementById("client-list");
  if(list)
    list.style.display = "none";
}

function showList() {
  var form = document.getElementById("myForm");
  if(form)
    form.style.display = "none";
  var list = document.getElementById("client-list");
  if(list)
    list.style.display = "block";

  console.log(customers);
  if(ul)
  {
    ul.innerHTML = "";
    for (let customer of customers) {
      ul.innerHTML += `<li class="list-group-item">{${customer.getData()}</li>`;
    }
  }
}


