import React from 'react';
import { connect } from 'react-redux';
import Chirp from './Chirp';

let Home = (props) => {
    //console.log(props)
    return (
        <section id="viewFeed">
            <div class="content">
                <div class="chirper">

                    <h2 class="titlebar">Pesho</h2>

                    <form id="formSubmitChirp" class="chirp-form">
                        <textarea name="text" class="chirp-input"></textarea>
                        <input class="chirp-submit" id="btnSubmitChirp" value="Chirp" type="submit" />
                    </form>

                    <div id="userStats" class="user-details">
                        <span>0 chirps</span> | <span>1 following</span> | <span>0 followers</span>
                    </div>
                </div>
                <div id="chirps" class="chirps"><h2 class="titlebar">Chirps</h2>
                    {/* {props.state.chirps.defaultStore.filter(x => {
                        if(props.state.auth.subscriptions.indexOf(x.author) >= 0){
                            return x;
                        }
                    }).map(chirp => {
                        return <Chirp key={chirp._id} props={chirp} />
                    })} */}
                </div>
            </div>
        </section>
    )

}

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps, null)(Home)


