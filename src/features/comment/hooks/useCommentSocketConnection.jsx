import React, { useEffect } from 'react';
import { socket } from '../../../lib';
import useCommentStore from '../store/CommentStore';

const UseCommentSocketConnection = () => {
    const {ticketId,setCommentList}=useCommentStore()
    useEffect(() => {
        // Join the room for the specific ticket
        socket.emit('joinTicketRoom', ticketId);

        socket.on('commentAdded', (updatedComments) => {
            setCommentList(updatedComments);
        });
        
        socket.on('initialComments', (initialComments) => {
            setCommentList(initialComments);
        });

        socket.on('commentEdited', (updatedComments) => {
            setCommentList(updatedComments);
        });

        socket.on('commentDeleted', (updatedComments) => {
            setCommentList(updatedComments);
        });

        // Cleanup on component unmount
        return () => {
            socket.off('commentAdded');
            socket.off('commentEdited');
            socket.off('initialComments');
            socket.off('commentDeleted');
            socket.emit('leaveTicketRoom', ticketId);
        };
    }, [ticketId]);
   
}

export default UseCommentSocketConnection;
