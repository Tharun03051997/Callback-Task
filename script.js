const ram = document.getElementById("tharun")


const greet =(msg,cb)=>
{

    setTimeout(() => {
        console.log(msg);
   ram.innerHTML = msg;
    cb();
    },2000);
    
   
}





greet(10,data=()=>{
    greet(9,data=()=>{
        greet(8,data=()=>{
           greet(7,data=()=>{
              greet(6,data=()=>{
                 greet(5,data=()=>{
          greet(4,data=()=>{
     greet(3,data=()=>{
   greet(2,data=()=>{
greet(1,data=()=>{
greet("Happy Inependence Day")
    })
    })
    })
    })
    })
    })
    })
    })
    })
})