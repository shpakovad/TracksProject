import React from 'react';
import './App.css';
import Tracks from "./Components/Tracks/Tracks";
import Filter from "./Components/Filter/Filter";
import data from './data'
import Pagination from "./Components/Paginator/Paginator";
import CountPerPage from "./Components/CountPerPage/CountPerPage";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            currentPage: 1,
            dataPerPage: 4,
            sortType: 'asc',
            selectedValue: 'All',
            key: '',
            track: "",
            filterValue: "All",
        }
    }

    handleSelectChange = (value, filteredProperty) => {
        this.setState({
            selectedValue: filteredProperty,
            track: value,
            filterValue: value
        })
    };


    paginate = (pageNumber) => {
        this.setState({currentPage: pageNumber})
    };

    changeCountData = (newPerPage) => {
        this.setState({dataPerPage:newPerPage})
    };

    onSort = (sortType, key) => {
        this.setState({
            sortType,
            key
        })
    };


    render() {
        const indexOfLastData = this.state.currentPage * this.state.dataPerPage;
        const indexOfFirstData = indexOfLastData - this.state.dataPerPage;
        const currentData = this.state.data.slice(indexOfFirstData, indexOfLastData);

        let sorted = currentData.sort((a, b) => {
            let isReversed = (this.state.sortType === 'asc') ? 1 : -1;
            switch (this.state.key) {
                case 'year':
                    return isReversed * a.year.localeCompare(b.year);
                case 'genre':
                    return isReversed * a.genre.localeCompare(b.genre);
                case 'song':
                    return isReversed * a.song.localeCompare(b.song);
                case 'singer':
                    return isReversed * a.singer.localeCompare(b.singer)
            }
        });

        return (
            <div className="App">
                <div className='wrapper'>
                    <Tracks data={currentData.filter((item) => {
                        if (this.state.track === 'All' || this.state.selectedValue === 'All') {
                            return true
                        } else if (this.state.selectedValue === 'genre') {
                            return item.genre === this.state.track
                        } else if (this.state.selectedValue === 'singer') {
                            return item.singer === this.state.track
                        } else if (this.state.selectedValue === 'year') {
                            return item.year === this.state.track
                        }
                    })}
                            onSort={this.onSort} sorted={sorted}/>
                    <Filter
                        data={currentData} selectedValue={this.state.selectedValue} filterValue={this.state.filterValue}
                        handleSelectChange={this.handleSelectChange}/>
                </div>
                <Pagination dataPerPage={this.state.dataPerPage} data={currentData}
                            totalData={this.state.data.length} paginate={this.paginate} />
                <CountPerPage dataPerPage={this.state.dataPerPage} changeCountData={this.changeCountData}/>

            </div>
        );
    }
}

export default App;
