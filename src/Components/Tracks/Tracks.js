import React, {Component} from 'react';
import Track from "../Track/Track";
import style from './Tracks.module.css'


class Tracks extends Component {


    render() {
        let tracksElements = this.props.data.map((track) => {

            return <Track key={track.id} singer={track.singer} song={track.song} genre={track.genre} year={track.year}/>
        });
        return (
            <div>
                <div className={style.main}>

                    <div className={style.singers}><span> Singer </span>
                        <span onClick={() => {
                            this.props.onSort('asc', 'singer')
                        }}> ↑ </span>
                        <span onClick={() => {
                            this.props.onSort('desc', 'singer')
                        }}> ↓</span>
                    </div>

                    <div className={style.songs}><span>Song </span>
                        <span onClick={() => {
                            this.props.onSort('asc', 'song')
                        }}> ↑ </span>
                        <span onClick={() => {
                            this.props.onSort('desc', 'song')
                        }}> ↓</span>
                    </div>

                    <div className={style.genres}><span>Genre </span>
                        <span onClick={() => {
                            this.props.onSort('asc', 'genre')
                        }}> ↑ </span>
                        <span onClick={() => {
                            this.props.onSort('desc', 'genre')
                        }}> ↓</span>
                    </div>

                    <div className={style.years}><span>Year </span>
                        <span onClick={() => {
                            this.props.onSort('asc', 'year')
                        }}>↑</span>
                        <span onClick={() => {
                            this.props.onSort('desc', 'year')
                        }}>↓</span>
                    </div>

                </div>
                <div>
                    {tracksElements}
                </div>
            </div>
        );
    }
}

export default Tracks;
