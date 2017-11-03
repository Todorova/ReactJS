import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/forms/Form';
import dataSource from './services/dataSource';
import CommentsList from './components/CommentsList';
import withSubscription from './services/withSubscriptions';
import PostList from './components/PostList';


dataSource.setData('comments', [
  'comment1',
  'comment2',
  'comment3',
  'comment4',
  'comment5',
  'comment6',
  'comment7'
])

dataSource.setData('posts', [
  {author: 'Pesho', text: 'HI'},
  {author: 'Pesho', text: 'Gosho e pich'}
]);

const SubscribedList = withSubscription(CommentsList, 'comments');
const SubscribedPosts = withSubscription(PostList, 'posts');


const About = (props) => (
  <div>
    <h1>About Page</h1>
    <Route path={props.match.url + '/contact'} component={Contact} />
  </div>
)

const Home = props => (
  <div>
    <h1>Home Page</h1>
  </div>
)

const Contact = props => (
  <div>
    <h1>Contact nested Component</h1>
  </div>
)

const User = props => (
  <div>
    <h1>User Details</h1>
    <p>Displaying details for {props.match.params.userName}</p>
  </div>
)

const DashBoard = props => (
  <div>
    <h1>DashBoard</h1>
    <p>{props.data}</p>
  </div>
)

const DashboardWithData = withData(DashBoard, 'Some data');

const NotFound = props => (
  <div>
    <h1>404 Not Found Page</h1>
  </div>
)

function withData(WrappedComponent, data) {
  class WithData extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <WrappedComponent data={data} />
      )
    }
  }

  return WithData;
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false }
  }

  changeData(){
    dataSource.setData('comments', [
      'comment1',
      'comment2',
      'comment3',
      'comment4',
      'comment5',
      'comment6',
      'comment7',
      'comment8'
    ])

    dataSource.setData('posts', [
      {author: 'Pesho', text: 'HI'},
      {author: 'Pesho', text: 'Gosho e pich'},
      {author: 'Kiro', text: 'Added comment'}
    ]);


  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => {
            if (this.state.isLoggedIn) {
              return (<Redirect to='/dashboard' />);
            } else {
              return (<Home />);
            }
          }} />
          <Route path='/about' component={About} />
          <Route path='/comments' component={SubscribedList}/>
          <Route path='/posts' component={SubscribedPosts}/>
          <Route path='/details/:userName' component={User} />
          <Route path='/login' component={LoginForm} />
          <Route component={NotFound} />
        </Switch>
        {/* <DashboardWithData /> */}
        
      </div>
    );
  }
}

export default App;
