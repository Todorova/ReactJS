import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../index.css';
import actionObj from './../actions/index';
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
                    {this.props.counters.map(counter => {
                        return <Counter
                            key={counter.index}
                            props={counter}
                            increment={this.props.incrementCounter}
                            decrement={this.props.decrementCounter}
                            clear={this.props.clearCounter}
                        />
                    })}
                </div>
                <input type='submit' value='Add Counter' onClick={() => { this.props.addCounterAction() }} />
                <input type='submit' value='Remove Counter' onClick={() => { this.props.removeCounterAction() }} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        counters: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCounterAction: () => {
            dispatch(actionObj.addCounter());
        },
        removeCounterAction: () => {
            dispatch(actionObj.removeCounter());
        },
        incrementCounter: (payload) => {
            console.log('increment');
            dispatch(actionObj.incrementCounter(payload));
        },
        decrementCounter: (payload) => {
            console.log('decrement');
            dispatch(actionObj.decrementCounter(payload));
        },
        clearCounter: (payload) => {
            console.log('clear');
            dispatch(actionObj.clearCounter(payload));
        } 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountersList);




