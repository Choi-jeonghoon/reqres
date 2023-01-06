import CommonContainer from '../container/Commoncontainer';
import MainContainer from './../container/MainContainer';
import useMainPage from '../hooks/useMainPage';
import PaginationComponent from '../components/PaginationComponent';

const MainPage = () => {
  const { users, page, totalPageNumber, setPage } = useMainPage();

  return (
    <CommonContainer>
      <MainContainer usersData={users} />
      <PaginationComponent
        nowPageNumber={page}
        totalPageNumber={totalPageNumber}
        setNowPageNumber={setPage}
      />
    </CommonContainer>
  );
};

export default MainPage;
