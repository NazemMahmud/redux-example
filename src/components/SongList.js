import React from "react";
import {connect} from "react-redux";

function SongList ({songs}) {
    return (
        <div>
            {
                songs.map( song => (
                    <div className='item' key={song.title} >
                        <p> <b>Title: </b> {song.title} <b>Duration: </b> {song.duration}</p>
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    return { songs: state.songs  };
}


export default connect(mapStateToProps)(SongList);