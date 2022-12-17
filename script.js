var first_head = document.querySelector("#formhead")
var submitted = document.querySelector(".classsubmit")

first_head.addEventListener('submit',Formmain)
function Formmain(event){
    event.preventDefault()
    
  var first_name_main = document.querySelector('[placeholder="firstname"]').value
  var last_name_main = document.querySelector('[placeholder="lastname"]').value
  var address_name_main = document.querySelector('[placeholder="address"]').value
  var pincode_name_main = document.querySelector('[placeholder="pincode"]').value
  var gender_name_main = document.querySelector('[placeholder="gender"]').value
  var food_name_main = document.querySelector('[placeholder="food"]').value
  var state_name_main = document.querySelector('[placeholder="state"]').value
  var country_name_main = document.querySelector('[placeholder="country"]').value
//   if(first_name_main !="" && last_name_main!="" && address_name_main !="" && pincode_name_main !="" && gender_name_main!="" && country_)
  console.log("for submit");
 
var data = [first_name_main,last_name_main,address_name_main,pincode_name_main,gender_name_main,food_name_main,state_name_main,country_name_main]

var count_check = 0;
for (let i=0; i<data.length; i++){   
     if(data[i]){    
        count_check++;
     }}
     if(count_check<=8){
        var enter_triger = document.querySelector(".ssckkj")
        enter_triger.style.display="block"
        }
     if(count_check >= 8){
// console.log(first_name_main,last_name_main,address_name_main,pincode_name_main,gender_name_main,food_name_main,state_name_main,country_name_main)
var main_head = document.createElement("tr")
for(var i=0; i<8; i++){
var table_td = document.createElement('td')
table_td.innerText=data[i]
main_head.append(table_td)

}
document.querySelector('tbody').append(main_head);
enter_triger.style.display="none"

}


}


