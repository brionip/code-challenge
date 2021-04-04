import logo from './logo.svg';
import './App.css';
import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
var d = new Date(0); // The 0 there is the key, which sets the date to the epoch

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        message: '',
        name: '',
      };
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      this.populateList();
    }

  handleClick() {
    const data = { text: this.state.name };
    fetch("https://9wbc8szixb.execute-api.ap-southeast-2.amazonaws.com/dev/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(r => {
      console.log('Success');
      this.setState({
            isLoaded: true,
            message: 'Success',
            name: ''
          });
      this.populateList();
    })
    .catch((error) => {
      console.error('Error');
      this.setState({
            isLoaded: true,
            message: 'Error!'
          });
    });
    
  }

  populateList() {
    fetch("https://9wbc8szixb.execute-api.ap-southeast-2.amazonaws.com/dev/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          //console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

onTodoChange(value){
        this.setState({
             name: value
        });
    }

  render() {
    const { error, isLoaded, items, message } = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <h1>
          Broin's application
        </h1>
        <h3>POST request</h3>
        <b>{message}</b>
        <label>
          <div>Type some text below</div>
          <input type="text" value={this.state.name} onChange={e => this.onTodoChange(e.target.value)} />
        </label>
        <div>
        <button onClick={this.handleClick}>
        Make a POST request
        </button>
        </div>
        <hr width='80%'/>
        <div>
        <h3>GET request</h3>
        <div>
        <table border='1'>
          <tr>
            <th>Text</th>
            <th>Id</th>
            <th>Created On</th>
            <th>Updated On</th>
          </tr>
          {items.map(item => (
            <tr>
              <td>{item.text}</td>
              <td>{item.id}</td>
              <td>{new Date(item.createdAt).getHours()}:{new Date(item.createdAt).getMinutes()} {new Date(item.createdAt).getDate()}-{new Date(item.createdAt).getMonth()+1}-{new Date(item.createdAt).getFullYear()}</td>
              <td>{new Date(item.updatedAt).getHours()}:{new Date(item.updatedAt).getMinutes()} {new Date(item.updatedAt).getDate()}-{new Date(item.updatedAt).getMonth()+1}-{new Date(item.updatedAt).getFullYear()}</td>
            </tr>  
            ))}
        </table>
        </div>
        </div>
        
      </header>
      
    </div>
  );
}
}
  

export default App;
