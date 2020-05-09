const axios = require ('axios')

function getAsteroids  (startDate,endDate,keyApi){
    const url = (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${keyApi}`);

    const asteroides = axios.get(url);

  asteroides.then((response) =>{
        return response.data
    }).then ((asteroides)=>{
        const ast=  asteroides.near_earth_objects[startDate]
        for( asteroide of ast ){
            
            console.log("Nombre del asteroide: ",asteroide.name);
            console.log("Su diametro minimo fue: ", asteroide.estimated_diameter.kilometers.estimated_diameter_min+ "KM");
            console.log("Su diametro maximo fue: ", asteroide.estimated_diameter.kilometers.estimated_diameter_max + "KM");
            console.log("Era peligroso: ",asteroide.is_potentially_hazardous_asteroid);
        }
    })
    .catch((error) => {
        console.log(error.response.data);
      });    
}

getAsteroids("1996-09-20", "1996-09-20", "cQp33R7gzB1biBiSuyNHGbAYy0JqYNeQ2mYL4Klw")




//git init (nuevo repositorio)
//git remote add origin url (la url de su git hub)(para crear un nuevo repositorio)
// git clone (para un repositorio ya creado)
//git ad .
//git commit -m "mensaje obligatorio"
//git push origin master

//nuevo branch:
//git checkout -b feature