import { 
        GET_VAC_COUNT, 
        GET_VAC_TABLE, 
        GET_WORDS_TABLE, 
        IS_FETCH_VAC_TABLE, 
        IS_FETCH_WORDS_TABLE  
       } from '../constants'

const initialState = { 
        vacTableIsFetch: true,
        wordsTableIsFetch: true
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case( GET_VAC_COUNT ):
            return Object.assign( {}, state, { vac_count: action.payload } );
        case( GET_VAC_TABLE ):
            return Object.assign( {}, state, { vacancies_table: action.payload} );
        case( GET_WORDS_TABLE ):
            return Object.assign( {}, state, { words_table: action.payload} );
        case( IS_FETCH_VAC_TABLE ):
            return Object.assign( {}, state, { vacTableIsFetch: action.payload} );
        case( IS_FETCH_WORDS_TABLE ):
            return Object.assign( {}, state, { wordsTableIsFetch: action.payload} );
        default:
            return state;
    }
};

export default reducer;