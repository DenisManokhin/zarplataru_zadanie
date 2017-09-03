import axios from 'axios'

import { 
    GET_VAC_COUNT, 
    GET_VAC_TABLE, 
    GET_WORDS_TABLE, 
    IS_FETCH_VAC_TABLE, 
    IS_FETCH_WORDS_TABLE  
   } from '../constants'


export const getVacTable = () => dispatch => {
    axios.get('https://api.zp.ru/v1/vacancies/?average_salary=true&categories_facets=true&geo_id=826&highlight=true&period=today&search_type=fullThrottle&state=1')
    .then( response => {
        dispatch( { type: GET_VAC_COUNT, payload: response.data.metadata.resultset.count } );
        dispatch( { type: GET_VAC_TABLE, payload: response.data.metadata.categories_facets } );
        dispatch( { type: IS_FETCH_VAC_TABLE, payload: false } );
    } )
};

export const getWordsTable = () => dispatch => {
    axios.get('https://api.zp.ru/v1/vacancies?geo_id=826&headers_facets=1&period=today')
    .then( response => {
        dispatch( { type: GET_WORDS_TABLE, payload: response.data.metadata.headers_facets } );
        dispatch( { type: IS_FETCH_WORDS_TABLE, payload: false } );
    } )
};