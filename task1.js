const butts=document.querySelector(".button");

function calculate() 
{
    var n1 = parseInt(document.getElementById("num1").value);
    console.log(n1);
    var n2 = parseInt(document.getElementById("num2").value);
    console.log(n2);
    var oper = document.getElementById("operator").value;

        if(isNaN(n1)||isNaN(n2))
        {
          console.error("Enter valid number");
        }

        else if (oper === "+") {
            add(n1,n2);
        } 
        else if (oper === "-") {
            substract(n1,n2);
        } 
        else if (oper === "/") {
          if(n2=='0'&& n1=='0'||n2=='0')
          {
            alert("Unable to divide");
          }
          else
          {
            divide(n1,n2);
          }
        }     
        else if (oper === "*") {
            multiply(n1,n2);
        }
        else if(oper==='%')
            {
                modulus(n1,n2);
            }
}

        function add(n1,n2)
        {            
          document.getElementById("result").value = n1 + n2;
          console.log(n1+n2);
        }
        function substract(n1,n2)
        {
          document.getElementById("result").value = n1 - n2;
          console.log(n1-n2);
        }
        function divide(n1,n2)
        {
          document.getElementById("result").value = n1 / n2;
          console.log(n1/n2);
        }
        function multiply(n1,n2)
        {
          document.getElementById("result").value = n1 * n2;
          console.log(n1*n2);
        }
      
        function modulus(n1,n2)
        {            
            var mod=n1%n2;
            document.getElementById("result").value = n1 % n2;
            document.getElementById("ans").innerHTML= `The modulus of ${n1} and ${n2} is ${mod}`;
            console.log("This is modulus");
        }
    
        
        butts.addEventListener('click',calculate);