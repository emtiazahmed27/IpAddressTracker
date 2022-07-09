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
        swal("fetching default device location")
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

    let api=`http://ip-api.com/json/${ip}`
    function getLocation(){
        //fetching data
        fetch(api)
            .then( res => res.json()).then( data => {
                console.log(data);
                
                //error handling
                if (data.status==="fail"){
                    //calling swal() if any error occurs 
                    swal("invalid query");
                    //setting output fields to its initial value
                    loc.innerText="__";
                    timeZone.innerText="__";
                    isp.innerText="__";
                    ipAdd.innerText="__";
                }
                else{
                    loc.innerText=`${data.city},${data.country}`;
                    timeZone.innerText=data.timezone;
                    isp.innerText=data.isp;
                    ipAdd.innerText=data.query;
                }
            })  
    }
    getLocation();
})






