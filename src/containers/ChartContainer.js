import React from 'react';
import SongList from '../components/SongList';

class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(response => response.json())
      .then(json => this.setState({songs: json.feed.entry}));
  }

  render(){
    return(
      <article>
        <h2>iTunes Top 20</h2>
        <SongList songs={this.state.songs} />
      </article>
    );
  }
}

export default ChartContainer;
