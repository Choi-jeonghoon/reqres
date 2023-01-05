import HeaderContaniner from './HeaderContainer';

type Props = {
  children: React.ReactNode;
};

const CommonContainer = ({ children }: Props) => {
  return (
    <div>
      <HeaderContaniner />
      {children}
    </div>
  );
};

export default CommonContainer;
