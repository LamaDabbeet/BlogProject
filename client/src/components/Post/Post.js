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
            <div className="Post">
                <div className="Title">
                    {title}
                </div>

                <div className="Content">
                    <p ><b className="Head">Content:</b> {body}</p>
                    <p ><b >Category:</b> {category}</p>
                    <h5 className="Date">Created At:  {moment(datestamp).format('DD MM YYYY')}</h5>
                </div>
                <div class="Buttons">
                    <Button><Link to={`/edit/${id}`}> Edit </Link></Button>
                    <Button><Link onClick={this.confirmDeletion} > Delete </Link></Button>
                </div>

            </div>
        );
    }
}
export default Post;
