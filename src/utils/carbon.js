import axios from 'axios';
import { OPENWEATHERAPIKEY } from './config';

export default function carbon(location,datetime) {
    const encodedURI = buildURI(location,datetime);
    return axios
        .get(encodedURI)
        .then(response => response.data)
        .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1200)))
        .catch(error => handleError(error));
}

export function buildURI(location,datetime) {
    return window.encodeURI(`http://api.openweathermap.org/pollution/v1/co/${location}/${datetime}.json?appid=${ OPENWEATHERAPIKEY }`);
}

function handleError(error) {
    console.log(error.message);
    return null;
}
