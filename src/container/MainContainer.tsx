import MainComponent from '../components/MainComponent';
import { UserType } from '../types/userType';

interface MainContainerPropsType {
  usersData: Array<UserType.User>;
}

const MainContainer = ({ usersData }: MainContainerPropsType) => {
  return <MainComponent usersData={usersData} />;
};

export default MainContainer;
