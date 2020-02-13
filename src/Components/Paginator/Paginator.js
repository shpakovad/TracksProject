import React, {Component} from 'react';
import style from './Paginator.module.css'


class Pagination extends Component {

    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.totalData / this.props.dataPerPage); i++) {
            pageNumbers.push(i)
        }
        return (
            <div className={style.paginator}>
                {pageNumbers.map((number) => {
                    return <a key={number.toString()}
                              onClick={() => {
                                  this.props.paginate(number)
                              }}
                              href='#'>
                        {number}
                    </a>

                })
                }

            </div>
        );
    }
}

export default Pagination;
