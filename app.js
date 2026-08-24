

 let expense = document.querySelector("#Expense");
 let amount = document.querySelector("#Amount");
 let btn = document.querySelector("button");
 let ul = document.querySelector("ul");
 let total = 0;
 let p= document.querySelector("#total");
 
 btn.addEventListener("click",function(){
   console.log(expense.value);
   console.log(amount.value);

   if(expense.value=="")
    {
         return;
    }
    if(amount.value=="")
    {
         return;
    }

   let price = Number(amount.value);
   if(price <= 0){
    return;
   }

   let li = document.createElement("li");
   li.textContent = expense.value + "- RS "+ amount.value;
   ul.append(li);
   
   
    total=total+price;
    p.innerText ="Total:"+total;

    let del = document.createElement("button");
    del.textContent="delete";
    li.append(del);

    del.addEventListener("click",function(){
    li.remove();
    total=total-price;
    p.innerText = "Total:"+ total;
 })
 expense.value="";
amount.value="";

 })

    