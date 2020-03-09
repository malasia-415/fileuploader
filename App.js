import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serachTerm: '',
            filterOption: 'All'
        };
     }

updateSearchTerm(term) {
    this.setState({
        serachTerm: term 
    })
}

updateFileOption(option) {
    this.setState({
        fileOption: option 
    })
}




render() {
    return (
        <div className="App">
            <SearchBar
                searchTerm={this.state.searchTerm}
                filterOption={this.state.filterOption}
                handleUpdate={term=>this.updateSearchTerm(term)}
                handleFilterChange={option => this.updateFileOption(option)}/>
            <FilterableList
                files={this.props.files}
                searchTerm={this.state.searchTerm}
                filterOption={this.state.filterOption}/>
              </div>
        );
    }
}


export default App;