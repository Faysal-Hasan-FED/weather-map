



// load data by api 
const loadData = ()=>{
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    
    if(inputFieldText!=''){
         // clearing input field
    inputField.value = '';
    

    // api start

    // const url = ;
   
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&appid=292b62d4c016c3339f326599ac4e4bfb`)
      .then(res=>{
          if(!res.ok){
              alert("no weather found");
              return;
          }
          return res.json();
      })
      .then(data =>showData(data));
      
    }
    else{
       alert("please enter a city");
        // return;
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
    <p>Humidity: ${data.main.humidity}% </p>
    `;
    result.appendChild(div);
}