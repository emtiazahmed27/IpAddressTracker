//Elements
const input=document.querySelector("input"),
 btn=document.querySelector("button"),
 ipAdd=document.querySelector(".ip"),
 loc=document.querySelector(".loc"),
 timeZone=document.querySelector(".time"),
 isp=document.querySelector(".isp");

//function that collects IP Address
function getIp(){
    if(input.value===""){
        Swal.fire({
            title:'Fetching Default Device Location',
            showConfirmButton:false,
            timer:1500,
        })
        return input.value;
    }
    else return input.value;
}

//button funcrionalities
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // collecting IP
    const ip=getIp();
    console.log(ip);

    let api=`https://geo.ipify.org/api/v2/country,city?apiKey=at_pqYDBkhOgn2nnBRTJKsoFTE56IlLd&ipAddress=${ip}`
    function getLocation(){
        //fetching data
        fetch(api)
            .then( res => res.json()).then( data => {
                console.log(data);
                
                //error handling
                if (data.code===422){
                    //calling swal() if any error occurs 
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ivalid Query',
                      })
                    //setting output fields to its initial value
                    loc.innerText="__";
                    timeZone.innerText="__";
                    isp.innerText="__";
                    ipAdd.innerText="__";
                }
                else{
                    loc.innerText=`${data.location.region},${data.location.country}`;
                    timeZone.innerText=data.location.timezone;
                    isp.innerText=data.isp;
                    ipAdd.innerText=data.ip;
                }
            })  
    }
    getLocation();
})






