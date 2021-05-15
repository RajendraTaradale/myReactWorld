import React, { useEffect, useState } from 'react';
import Navbar from './Components/NavBar';
import { Button, Icon, List, Grid, Header } from 'semantic-ui-react';
import WarningModal from './Components/WarningModal';
import './App.css';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalReducer from './store/modalReducer';

//Service, Axios
import ServiceBase from './Services/ServiceBase';
import Interceptor from './Services/ServiceBase.interceptor';
import Reader from './Components/StoreValidate';
import MyProvider from './Components/Context/MyProvider';
import Cars from './Components/CarsContextConsumer';
import UserDetails from './Pages/UserDetailsForm';
import EmployeeDetailsFormik from './Pages/UserDetailsFormik';
import UserList from './Pages/DisplayUserList';
import Pagination from './Components/Pagination';
import DynamicFields from './Components/DynamicFields';
const store = createStore(modalReducer);
Interceptor.interceptor(store);

function App() {

  const [users, setUsers] = useState([]);
  const errorURL = 'https://api.github.com/users/rajendrataradale5';
  const trueURL = 'https://api.github.com/users/rajendrataradale';
  useEffect(() => {
    getData(trueURL);
  }, []);
  const getData = (url) => {
    ServiceBase.get(url).then((next) => {
      console.log(next.data);
      setUsers([next.data]);
    });
  };

  //--------------Pagination Code----------------------

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await ServiceBase.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  //-------------Pagination code End

  return (<>
    <div className='container'>
      <MyProvider>
        <Provider store={store} >
          <div className='row'>
            <div className="panel panel-default">
              <div className="panel-body">
                <Grid columns={2} divided className='w-100'>
                  <Grid.Column className='center-items'>
                    <Header as='h1' className='transform-vertical'>
                      Expected Response
            </Header>
                    <List>
                      {users.map((o) => (
                        <List.Item key={o.id}>{o.name} {o.location}</List.Item>
                      ))}
                    </List>
                  </Grid.Column>
                  <Grid.Column className='center-items'>
                    <Button
                      animated
                      onClick={getData.bind(this, errorURL)}
                      color='google plus'>
                      <Button.Content visible>Call error API</Button.Content>
                      <Button.Content hidden>
                        <Icon name='arrow right' />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid>
                <Reader />
                <WarningModal />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className="panel panel-default">
              <div className="panel-body">
                <Cars />
              </div>
            </div>
          </div>
        </Provider>
      </MyProvider>



      <div className='row'>
        <div className="panel panel-default">
          <div className="panel-body">
            <UserDetails />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="panel panel-default">
          <div className="panel-body">
            <EmployeeDetailsFormik />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="panel panel-default">
          <div className="panel-body">
            <UserList users={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate} />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="panel panel-default">
          <div className="panel-body">
            <DynamicFields />
          </div>
        </div>
      </div>

    </div>
  </>);
}


export default App;

