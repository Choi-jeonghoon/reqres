import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';

const usePagination = (
  NowPageNumber: number, //현재페이지
  TotalPageNumber: number, // 총 페이지
  diviber: number, // 나눠줄값
  setNowPageNumber: Dispatch<SetStateAction<number>>,
) => {
  //첫 페이지
  const fistPageNumber: boolean = useMemo(() => NowPageNumber === 1, [NowPageNumber]);

  // 마지막 페이지
  const lastPageNumber: boolean = useMemo(
    () => NowPageNumber === TotalPageNumber,
    [NowPageNumber, TotalPageNumber],
  );

  //시작페이지 번호
  const startPageNumber: number = useMemo(
    () => Math.ceil(NowPageNumber / diviber - 1) * diviber + 1,
    [NowPageNumber, diviber],
  );

  //보여주고자하는 번호들 목록 map
  const pageListArr: Array<number | null> = Array.from({ length: diviber })
    .fill(0) //초기값 0으로 잡아야됨 empty값이 들어감 빈값이란소리다
    .map((_, idx: number) =>
      startPageNumber + idx <= TotalPageNumber ? startPageNumber + idx : null,
    )
    .filter((page: number | null) => Number.isInteger(page));

  //현재페이지 -1 이전페이지로 이동
  const handlePreviousButtonClick = useCallback(() => {
    setNowPageNumber((Previou: number) => Previou - 1);
  }, [setNowPageNumber]);

  //현재페이지 +1 다음페이지로 이동
  const handleNextButtonClick = useCallback(() => {
    setNowPageNumber((Previou: number) => Previou + 1);
  }, [setNowPageNumber]);

  // page button 눌렀을 때
  const handlePageButtonClick = useCallback(
    (page: number) => () => {
      setNowPageNumber(page);
    },
    [setNowPageNumber],
  );
  return {
    fistPageNumber,
    lastPageNumber,
    startPageNumber,
    pageListArr,
    handlePreviousButtonClick,
    handleNextButtonClick,
    handlePageButtonClick,
  };
};

export default usePagination;
