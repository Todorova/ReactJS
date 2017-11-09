import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../index.css';

import Counter from './Counter';

class CountersList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <h1>Counters</h1>
                <div>
                    {console.log(this.props.increment)}
                    {this.props.counters.map(counter => {
                        return <Counter
                            key={counter.index}
                            props={counter}
                            increment={this.props.increment}
                            decrement={this.props.decrement}
                            clear={this.props.clear}
                        />
                    })}
                </div>
                <input type='submit' value='Add Counter' onClick={() => { this.props.addCounterHandler() }} />
                <input type='submit' value='Remove Counter' onClick={() => { this.props.removeCounterHandler() }} />
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        counters: state
    }
}

export default connect(mapStateToProps)(CountersList);




