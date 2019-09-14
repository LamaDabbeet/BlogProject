import React, { Component } from 'react';
import moment from 'moment';
import './FullPost.scss';
import renderHTML from 'react-render-html';

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
                      <p><b>Autor:</b> {author}</p>
                        <p><b>Content:</b> {body}</p>
                    </div>


                    <p><b>Category:</b> {category}</p>

                    <h5>Create At: {moment(datestamp).format('DD MM YYYY')}</h5>
                    <div style={{ width: '60%' }}>{renderHTML(body)}</div>
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