import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state={ spans: 0 };
        this.imageRef=React.createRef();
    }

    setSpans=() => {
        console.log(this.imageRef.current.clientHeight);
        const height=this.imageRef.current.clientHeight;
        const spans=height/300;
        this.setState({ spans })
    }

    componentDidMount() {
        // console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    render() {
        const { description, urls }=this.props.image;

        return (
            <div style={{ grodRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }

}
export default ImageCard;