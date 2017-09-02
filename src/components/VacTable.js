import React from 'react'

const VacTable = ( { elements } ) => (
    <table className="table">
        <tbody>
            <tr>
                <th>Наименование рубрики</th>
                <th>Количество вакансий</th>
            </tr>
            { elements.map( vac => 
                <tr key={vac.id}>
                    <td>{vac.title}</td>
                    <td>{vac.count}</td>
                </tr>
            ) }
        </tbody>
    </table>
);

export default VacTable;