import CommonContainer from '../container/Commoncontainer';
import MainContainer from './../container/MainContainer';
import useMainPage from '../hooks/useMainPage';

const MainPage = () => {
  const { users } = useMainPage();
  return (
    <CommonContainer>
      <MainContainer usersData={users} />
    </CommonContainer>
  );
};

export default MainPage;
