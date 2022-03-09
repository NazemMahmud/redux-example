import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

function SongList ({songs, selectSong}) {
    return (
        <div className='ui divided list'>
            {
                songs.map( song => (
                    <div className='item' key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary" onClick={() => selectSong(song)}>
                                Select
                            </button>
                        </div>
                        <div className="content"> {song.title} </div>
                        {/*<p> <b>Title: </b>  <b>Duration: </b> {song.duration}</p>*/}
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    return { songs: state.songs  };
}

const mapDispatchToProps = {
    selectSong
};


export default connect(mapStateToProps, mapDispatchToProps)(SongList);