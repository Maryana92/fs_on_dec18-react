import React from 'react';

const Header = (props) => {
  console.log('------Rendering Header', props.title);
  return (
    <h1 className="Header">
      {props.title}
    </h1>
  );
};

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      title: 'My app'
    };
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });

    console.log('------Setting title');
  };


  render() {
    console.log('------Rendering App', this.state.title);

    return (
      <div className="App">
        <Header title={this.state.title} />

        <input
          type="text"
          onChange={(event) => {
            this.handleChange(event)
          }}
        />
      </div>
    );
  }
}

export default App;
