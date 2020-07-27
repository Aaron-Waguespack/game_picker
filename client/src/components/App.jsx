import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state={games:[
        {
            appid: 1,
            name: game1,
            genres: RPG,
            header_image: url
          },
          {
            appid: 2,
            name: game2,
            genres: RPG,
            header_image: url
          },
          {
            appid: 3,
            name: game3,
            genres: rpg,
            header_image: url
          }
      ]}
    }

    render() {
      return(
 <div> This is My Game App</div>
  )}
  }

  export default App;
