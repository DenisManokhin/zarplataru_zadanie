import React from 'react'

import Title  from './Title'
import VacTable from './VacTable'
import WordsTable from './WordsTable'

const Main = ( { vac_count, vacancies_table, words_table, vacTableIsFetch, wordsTableIsFetch } ) => (
    <div className="main">
        <div className="container">
            <div className="row">
                <div className="col-md-12" id="all_vac_block">
                    {vacTableIsFetch 
                        ? <h1>Loading...</h1> 
                        : <Title vac_count={ vac_count } /> 
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {vacTableIsFetch 
                        ? <h1>Loading...</h1> 
                        : <VacTable elements={vacancies_table} />
                    }
                </div>
                <div className="col-md-6"> 
                    {wordsTableIsFetch 
                        ? <h1>Loading...</h1> 
                        : <WordsTable elements={words_table} />
                    }
                </div>
            </div>
        </div>
    </div>
);

export default Main;