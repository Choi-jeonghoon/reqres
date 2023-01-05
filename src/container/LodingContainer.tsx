import { Box, CircularProgress } from '@mui/material';

const LodingComponent = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />;
    </Box>
  );
};

export default LodingComponent;
