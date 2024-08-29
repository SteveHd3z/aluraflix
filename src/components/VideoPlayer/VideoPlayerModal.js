import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  bgcolor: 'black',
  boxShadow: 24,
  p: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const buttonStyle = {
  position: 'absolute',
  top: 16,
  left: 16,
  color: 'white',
  zIndex: 1200, // Ensure the button is above the video
};

const VideoPlayerModal = ({ open, videoUrl, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-video-player"
      aria-describedby="modal-to-play-video"
      sx={{ zIndex: 1200 }} // Ensure the modal is above other content
    >
      <Box sx={modalStyle}>
        {/* Botón de flecha para regresar */}
        <IconButton
          onClick={handleClose}
          sx={buttonStyle}
        >
          <ArrowBack fontSize="large" />
        </IconButton>
        
        <ReactPlayer 
          url={videoUrl}
          controls
          playing
          width="100%"
          height="100%"
          style={{ position: 'relative' }}
        />
      </Box>
    </Modal>
  );
};

export default VideoPlayerModal;
