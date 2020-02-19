const axios = require("axios");



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=09bf73f567c1d27dcb29f77cfbbc371e&units=metric`)

    return resp.data.main.temp;

}



module.exports = {
    getClima
}