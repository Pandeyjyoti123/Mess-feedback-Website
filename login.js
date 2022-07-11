function Login()
{
var a = new Array();
up1 = new Object();
up2 = new Object();
up3 = new Object();
up4 = new Object();
up5 = new Object(); 
 
up1={
 name:'admin',
 password:btoa('adm12')
};
up2={
 name:'user',
 password:btoa('user12')
};
up3={
     name:'jyoti',
     password:btoa('jyoti12')
};
up4={
     name:'kajal',
     password:btoa('kajal12')
};
up5={
     name:'uncle',
     password:btoa('uncle12')
};
a.push(up1);
a.push(up2);
a.push(up3);
a.push(up4);
a.push(up5);
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
    
if(up1.name === username && up1.password===btoa(password))
     {
           //alert('Login successful');
           window.location.href="reg.html";
     }
else if(up2.name === username && up2.password===btoa(password))
     {
     //     alert('Login successful');
           window.location.href="reg.html";
     }
else if(up3.name === username && up3.password===btoa(password))
     {
     //     alert('Login successful');
           window.location.href="reg.html";
     }
else if(up4.name === username && up4.password===btoa(password))
     {
     //     alert('Login successful');
           window.location.href="reg.html";
     }
else if(up5.name === username && up5.password===btoa(password))
     {
     //     alert('Login successful');
           window.location.href="reg.html";
     }
else
     {
         alert('Login fail');
     }
}