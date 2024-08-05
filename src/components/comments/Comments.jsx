// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client';
// import FileUploader from '../fileUploader/fileUploader';
// import { CloudUpload, Delete } from '@mui/icons-material';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import useUpload from '../../hooks/useUpload';
// // Initialize Socket.io client
// const backendUrl = 'http://localhost:3977';
// const socket = io(backendUrl); // Adjust the URL if necessary

// const Comments = ({ ticketId, comments: initialComments, userId }) => {
//     const [comments, setComments] = useState(initialComments);
//     const [imgFiles, setImgFiles] = useState(initialComments);
//     const [newCommentText, setNewCommentText] = useState('');
//     const [editCommentText, setEditCommentText] = useState('');
//     const [isEditing, setIsEditing] = useState(null);
//     const [loading,setLoading]=useState(false)
//     const {
//         uploadToCloudinary,
//         isLoading: cloudinaryLoading,
//         error: cloudinaryError,
//       } = useUpload();
//     // Add comment handler
//     const handleAddComment = async () => {
//         try {
//                 setLoading(true)
//             const imagesCollection=await uploadToCloudinary(imgFiles)
//             const response = await axios.post(`${backendUrl}/api/comment/${ticketId}`, {
//                 userId,
//                 text: newCommentText,
//                 images:imagesCollection
//             });
//             setComments(response.data);
//             setNewCommentText('');
//         } catch (error) {
//             console.error('Error adding comment:', error);
//         }finally{
//             setLoading(false)
//         }
//     };

//     // Edit comment handler
//     const handleEditComment = async (commentId) => {
//         try {
//             const response = await axios.put(`${backendUrl}/api/comment/${ticketId}/comment/${commentId}`, {
//                 userId,
//                 text: editCommentText,
//             });

//             setComments(response.data);
//             setIsEditing(null);
//             setEditCommentText('');
//         } catch (error) {
//             console.error('Error editing comment:', error);
//         }
//     };

//     // Delete comment handler
//     const handleDeleteComment = async (commentId) => {
//         try {
//             const response = await axios.delete(`${backendUrl}/api/comment/${ticketId}/comment/${commentId}`, {
//                 data: { userId }
//             });

//             setComments(response.data);
//         } catch (error) {
//             console.error('Error deleting comment:', error);
//         }
//     };

//     useEffect(() => {
//         // Join the room for the specific ticket
//         socket.emit('joinTicketRoom', ticketId);

//         socket.on('commentAdded', (updatedComments) => {
//             setComments(updatedComments);
//         });

//         socket.on('commentEdited', (updatedComments) => {
//             setComments(updatedComments);
//         });

//         socket.on('commentDeleted', (updatedComments) => {
//             setComments(updatedComments);
//         });

//         // Cleanup on component unmount
//         return () => {
//             socket.off('commentAdded');
//             socket.off('commentEdited');
//             socket.off('commentDeleted');
//             socket.emit('leaveTicketRoom', ticketId);
//         };
//     }, [ticketId]);

//     return (
//         <div>
//             <h2>Comments</h2>
//             <div>
//                 <input
//                     type="text"
//                     value={newCommentText}
//                     onChange={(e) => setNewCommentText(e.target.value)}
//                 />
//                 <FileUploader styles={{color:"var(--text-primary-5)",background:"white","&:hover":{background:"var(--text-primary-5)"}}} buttonName="" icon={<AttachFileIcon sx={{color:"black"}} />} files={imgFiles} setFiles={setImgFiles} />
//                 <button disabled={loading} onClick={handleAddComment}>{loading?"...laoding":"Add Comment"}</button>
                
//             </div>
//             <ul>
//                 {comments.map((comment) => (
//                     <li key={comment._id}>
//                         {isEditing === comment._id ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={editCommentText}
//                                     onChange={(e) => setEditCommentText(e.target.value)}
//                                 />
//                                 <button onClick={() => handleEditComment(comment._id)}>Save</button>
//                                 <button onClick={() => setIsEditing(null)}>Cancel</button>
//                             </div>
//                         ) : (
//                             <div>
//                                 <p>{comment.text}</p>
//                                <div style={{border:"1px red"}}>
//                                {comment?.images.map(val=>{
//                                     return <img src={val} alt="img" style={{width:"100px",height:"100px"}} />
//                                 })}
//                                </div>
//                                 {comment.userId === userId && (
//                                     <>
//                                         <button onClick={() => {
//                                             setIsEditing(comment._id);
//                                             setEditCommentText(comment.text);
//                                         }}>Edit</button>
//                                         <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
//                                     </>
//                                 )}
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Comments;
