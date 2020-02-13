import React, {Component} from 'react';
import style from './CountPerPage.module.css'


class CountPerPage extends Component {

    render() {
        return (
            <div className={style.countPerPage}>
                <span>  <a href='#'  onClick={()=>{this.props.changeCountData(2)}}> 2 </a> </span>
                <span>  <a href='#'  onClick={()=>{this.props.changeCountData(4)}}> 4 </a> </span>
                <span>  <a href='#'  onClick={()=>{this.props.changeCountData(6)}}> 6 </a> </span>
            </div>
        );
    }
}

export default CountPerPage;
