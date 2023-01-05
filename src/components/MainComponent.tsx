import { UserType } from '../types/userType';

interface MainContainerPropsType {
  usersData: Array<UserType.User>;
}
const MainComponent = ({ usersData }: MainContainerPropsType) => {
  console.log(usersData);
  return <div>마지막부분</div>;
};

export default MainComponent;
