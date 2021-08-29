// error handling

document.getElementById("error-msg").style.display='none';
document.getElementById("error-msg-2").style.display='none';

// load data by api 
const loadData = ()=>{
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    
    if(inputFieldText!=''){
         // clearing input field
    inputField.value = '';
    document.getElementById("error-msg").style.display='none';

    // api start

    // const url = ;
   
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&appid=292b62d4c016c3339f326599ac4e4bfb`)
        .then(res=>res.json())
        .then(data=>showData(data))
        .catch(error=>{
            document.getElementById("error-msg-2").style.display='block';
            document.getElementById("error-msg").style.display='none';
            document.getElementById("error-msg-2").style.textAlign='center';
        })
    }
    else{
        document.getElementById("error-msg").style.display='block';
        document.getElementById("error-msg-2").style.display='none';
        document.getElementById("error-msg").style.textAlign='center';
    }
   
}

const showData = data =>{
    const result = document.getElementById("result");
    result.textContent='';
    const div = document.createElement('div');
    div.classList.add('div-style');
    div.innerHTML =`
    <p>Name :${data.name} </p>
    <p>Country: ${data.sys.country}</p>
    <p>Temperature: ${Math.round(data.main.temp-273)}&deg;C </p>
    <p>Feels like: ${Math.round(data.main.feels_like-273)}&deg;C </p>
    <p>Humidity: ${data.main.humidity} </p>
    `;
    result.appendChild(div);
}