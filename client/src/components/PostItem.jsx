// src/components/PostItem.jsx
import React, { useState } from 'react';
import CommentSection from './CommentSection';
import './PostItem.css'; // Ensure CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const PostItem = ({ post }) => {
    const { itemName, itemDescription, itemLocation, itemPhoto, postType } = post;
    const [comments, setComments] = useState([]); // Initialize comments as empty array
    const [showCommentSection, setShowCommentSection] = useState(false); // Toggle comment visibility
    const [isFlagged, setIsFlagged] = useState(false); // State to manage flagging

    const handleNewComment = (comment) => {
        setComments([...comments, comment]);
    };

    const toggleFlag = () => {
        setIsFlagged(!isFlagged);
        // Optional: Call backend API to flag/unflag the post
    };

    return (
        <div className="post-item">
            {/* Flag Icon */}
            <div className="flag-icon" onClick={toggleFlag}>
                <FontAwesomeIcon 
                    icon={faFlag} 
                    className={isFlagged ? 'flagged' : 'unflagged'} 
                />
            </div>

            <h4>{postType === 'lost' ? 'Lost Item' : 'Found Item'}: {itemName}</h4>
            <p><strong>Description:</strong> {itemDescription || 'Not Provided'}</p>
            <p><strong>Location:</strong> {itemLocation || 'Not Provided'}</p>

            {/* Display the uploaded image if available */}
            {itemPhoto && (
                <div className="post-photo">
                    <p><strong>Photo:</strong></p>
                    <img src={itemPhoto} alt={itemName} />
                </div>
            )}

            {/* Toggle Comment Section Button */}
            <button className="toggle-comments" onClick={() => setShowCommentSection(!showCommentSection)}>
                {showCommentSection ? '▼ Hide Comments' : '▶ Comment'}
            </button>

            {/* Render Comment Section if toggled open */}
            {showCommentSection && (
                <CommentSection comments={comments} handleCommentSubmit={handleNewComment} />
            )}
        </div>
    );
};

export default PostItem;
