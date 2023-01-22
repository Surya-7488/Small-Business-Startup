function submitt()
{
    const m=document.getElementById('mob');
    const e=document.getElementById('email');
    const n=document.getElementById('name');
    const mal=document.getElementById('m');
    const f=document.getElementById('f');
    const o=document.getElementById('o');
    const enq=document.getElementById('enq');
    const ser=document.getElementById('ser');
    const pro=document.getElementById('pro');
    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    var phoneno = /^\d{10}$/;
    if(!m.value.match(phoneno))   
        alert("Pleas Fill the Enquiry Form");       
    else if(!e.value.match(mailRegex))       
        alert("Please Enter Correct Email");
        else  if(n.value.length==0)
        alert("Please Enter Name");
        else  if(!(mal.checked||f.checked||o.checked)) 
            alert("Please Select gender" );
            
            else   if(enq.value.length==0||(enq.value=="Write your enquiries")) 
                alert("Write your Query" );
                else   if(!(ser.checked||pro.checked)) 
                alert("Please Select Service" );   
                else
                alert("Thankyou For your Enquiry");        

}