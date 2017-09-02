import React from 'react'

const WordsTable = ( { elements } ) => (
    <table className="table">
        <tbody>
            <tr>
                <th>Слова</th>
                <th>Количество вакансий</th>
            </tr>
            { elements.map( element => 
                <tr key={element.header}>
                    <td>{element.header}</td>
                    <td>{element.count}</td>
                </tr>
            ) }
        </tbody>
    </table>
);

export default WordsTable;