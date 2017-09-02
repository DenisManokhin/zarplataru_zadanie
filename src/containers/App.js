import React, { Component } from 'react'
import { connect } from 'react-redux'

import Main from '../components/Main'

class App extends Component {    
    render() {
        return (
            <Main 
                vac_count={this.props.vac_count}
                vacancies_table={this.props.vacancies_table}
                words_table={this.props.words_table}
                vacTableIsFetch={this.props.vacTableIsFetch}
                wordsTableIsFetch={this.props.wordsTableIsFetch}    
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        vacTableIsFetch: state.vacTableIsFetch,
        wordsTableIsFetch: state.wordsTableIsFetch,
        vac_count: state.vac_count,
        vacancies_table: state.vacancies_table,
        words_table: state.words_table
    };
};

export default connect(mapStateToProps)(App);