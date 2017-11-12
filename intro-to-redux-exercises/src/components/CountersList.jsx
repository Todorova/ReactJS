import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../index.css';
import actionObj from './../actions/index';
import Counter from './Counter';

class CountersList extends Component {

    constructor(props) {
        super(props);

        // this.addCounterAction = this.addCounterAction.bind(this);
        // this.removeCounterAction = this.removeCounterAction.bind(this);
        // this.incrementCounter = this.incrementCounter.bind(this);
        // this.decrementCounter = this.decrementCounter.bind(this);
        // this.clearCounter = this.clearCounter.bind(this);
    }

    render() {
        return (
            <div className='container'>
                <h1>Counters</h1>
                <div>
                    {console.log(this.props)}
                    {this.props.counters.map(counter => {
                        return <Counter
                            key={counter.index}
                            props={counter}
                            increment={this.increment}
                            decrement={this.decrement}
                            clear={this.clear}
                        />
                    })}
                </div>
                <input type='submit' value='Add Counter' onClick={() => { this.props.addCounterAction() }} />
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
        // loadCourses: () => {
        //     dispatch(addInput);
        // },
        // change: () => {
        //     dispatch({type: 'TOGGLE', id:1})
        // }   
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountersList);




