import React from "react";
import {connect} from "react-redux";

function SongDetails ({song}) {
    return (
        <div className='ui'>
        { song ? (
            <div>
                <h3> Details for: </h3>
                <p>
                    Title: {song.title} <br/>
                    Duration: {song.duration}
                </p>
            </div>) : <div> Please, select a song :) </div>
        }
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectedSong  };
}

export default connect(mapStateToProps)(SongDetails);