import React, {Component} from 'react';
import style from './Filter.module.css'


class Filter extends Component {

    render() {

        let removeDuplicates = (array, key) => {
            return array.reduce((arr, item) => {
                const removed = arr.filter(i => i[key] !== item[key]);
                return [...removed, item];
            }, []);
        };

        let optionsSinger = removeDuplicates(this.props.data, 'singer').map((item) => {
            return <option key={item.id} value={item.singer}>
                {item.singer}
            </option>
        });

        let optionsYear = removeDuplicates(this.props.data, 'year').map((item) => {
            return <option key={item.id} value={item.year}>
                {item.year}
            </option>
        });
        let optionsGenre = removeDuplicates(this.props.data, 'genre').map((item) => {
            return <option key={item.id} selected={this.props.filterValue === item.genre} >
                {item.genre}
            </option>
        });
        return (
            <div className={style.filtration}>

                <div className={style.title}> Singer:</div>
                <select onChange={(e) => {
                    this.props.handleSelectChange(e.currentTarget.value, "singer")
                }}>
                    <option onChange={(e) => {
                        this.props.handleSelectChange(e.currentTarget.value, "singer")
                    }}>All
                    </option>
                    {optionsSinger}
                </select>

                <div className={style.title}> Genre:</div>
                <select onChange={(e) => {
                    this.props.handleSelectChange(e.currentTarget.value, "genre")
                }}>
                    <option onChange={(e) => {
                        this.props.handleSelectChange(e.currentTarget.value, "genre")
                    }}>All
                    </option>
                    {optionsGenre}
                </select>

                <div className={style.title}> Year:</div>
                <select onChange={(e) => {
                    this.props.handleSelectChange(e.currentTarget.value, "year")
                }}>
                    <option onChange={(e) => {
                        this.props.handleSelectChange(e.currentTarget.value, "year")
                    }}>All
                    </option>
                    {optionsYear}
                </select>

            </div>
        );
    }
}

export default Filter;
