// promises is a powerful javascript object used to handle asynchronous oprations.
// It has three states *pending, *Fulfilled(resolved), *rejected.
//pending means the task is still running. fullfilled means the task is completed.
//rejected means failed.

const orderitem = new Promise((resolve, reject) => {
  //let delivered=true;
let delivered=false;
delivered ? resolve() : reject();
});

orderitem.then(() => {
    console.log("food delivered");        
  })
  .catch(()=> {
    console.log("order cancelled");          
  
});
