import React, {Component} from 'react';
import style from './Track.module.css'


class Track extends Component {

    render() {

        return (
            <div className={style.trackBlock}>

                <div className={style.singerBlock}>{this.props.singer} </div>
                <div className={style.songBlock}>    {this.props.song} </div>
                <div className={style.genreBlock}>{this.props.genre} </div>
                <div className={style.yearBlock}>{this.props.year} </div>

            </div>
        );
    }
}

export default Track;
