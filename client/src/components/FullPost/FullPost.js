import React, { Component } from 'react';
import moment from 'moment';
import './FullPost.scss';


class FullPost extends Component {

    showPost = (props) => {
        if (!props.post) return null;

        const { title, author, body, category, datestamp } = this.props.post;

        return (
            <React.Fragment>
                <div className="FullPost">
                    <div className="Title">
                        {title}
                    </div>

                    <div className="Content">
                        <p ><b className="Head">Author:</b> {author}</p>
                        <p ><b className="Head">Content:</b> {body}</p>
                        <p ><b >Category:</b> {category}</p>
                        <h5 className="Date">Created At:  {moment(datestamp).format('DD MM YYYY')}</h5>
                    </div>

                </div>
            </React.Fragment>
        )

    }
    render() {
        return (
            <div className=" col-md-10">
                {this.showPost(this.props)}
            </div>
        );
    }
}


export default FullPost;
