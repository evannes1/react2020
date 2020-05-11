import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY='AIzaSyD4RdYm8FsKz_gd1fAel64uVOH_diVrcxo';
// key AIzaSyD4RdYm8FsKz_gd1fAel64uVOH_diVrcxo
class App extends React.Component {

    state={ videos: [], selectedVideo: null };

    // this will initialize the search term and load an initial search result
    componentDidMount() {
        this.onTermSubmit("buildings");
    }

    onTermSubmit=async (term) => {
        // console.log(term);
        const response=await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: "video",
                key: KEY
            }
        });
        // console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect=(video) => {
        console.log("From App: ", video);
        this.setState({ selectedVideo: video });

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;