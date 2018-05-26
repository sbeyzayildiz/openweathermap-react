import axios from 'axios';
import { OPENWEATHERAPIKEY } from './config';

export default function weekly(input) {
    const encodedURI = buildURI(formatInput(input));
    return axios
        .get(encodedURI)
        .then(response => response.data)
        .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1200)))
        .catch(error => handleError(error));
}

export function formatInput(input) {
    return input.split(/[,.]|\s/).filter(val => val);
}

export function buildURI(formattedInput) {
    return window.encodeURI(`https://api.openweathermap.org/data/2.5/forecast?q=${ formattedInput }&APPID=${ OPENWEATHERAPIKEY }&units=metric&lang=tr`);
}


function handleError(error) {
    console.log(error.message);
    return null;
}
