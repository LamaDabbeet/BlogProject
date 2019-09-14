import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Post.scss';
import Button from '../../components/common/Button/Button';
import moment from 'moment';


class Post extends Component {
    confirmDeletion = () => {
        const { id } = this.props.info;

        Swal.fire({
            title: 'Delete this one?',
            text: "This action can not be canceled!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.value) {
                this.props.deletePost(id)
                Swal.fire(
                    'Press OK to back',
                    'The post has been deleted',
                    'success'
                )
            }
        })
    }


    render() {
        const { id, title, body, category, datestamp } = this.props.info;

        return (
            <article className="Post">
                <div className="Title">
                <b><span>
                        {title.length > 25 ? `${title.substr(0, 25)}...` : title}
                    </span></b>
                </div>
                            
                <div className="Info">
                    <span >
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                    </span>
                </div>
                
                <p ><b>{category}</b></p>
            
                <p ><b>{moment(datestamp).fromNow()}</b></p>
                <Button><Link to={`/post/${id}`}> Show </Link></Button>
                <Button><Link to={`/edit/${id}`}> Edit </Link></Button>
                <Button><Link onClick={this.confirmDeletion} > Delete </Link></Button>
               </article>
        );
    }
}
export default Post;