import { Button, Box } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import usePagination from '../hooks/usePagination';

interface PaginationProps {
  nowPageNumber: number;
  totalPageNumber: number;
  setNowPageNumber: Dispatch<SetStateAction<number>>;
}

const PaginationComponent = ({
  nowPageNumber,
  totalPageNumber,
  setNowPageNumber,
}: PaginationProps) => {
  const {
    fistPageNumber,
    lastPageNumber,
    pageListArr,
    handlePreviousButtonClick,
    handleNextButtonClick,
    handlePageButtonClick,
  } = usePagination(nowPageNumber, totalPageNumber, 6, setNowPageNumber);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px', gap: '15px' }}>
      <Button variant='outlined' disabled={fistPageNumber} onClick={handlePreviousButtonClick}>
        이전
      </Button>
      {pageListArr.map((page) => (
        <Button
          key={page}
          variant={nowPageNumber === page ? 'contained' : 'outlined'}
          onClick={handlePageButtonClick(page !== null ? page : 1)}
        >
          {page}
        </Button>
      ))}

      <Button variant='outlined' disabled={lastPageNumber} onClick={handleNextButtonClick}>
        다음
      </Button>
    </Box>
  );
};

export default PaginationComponent;
