import HeaderContaniner from './HeaderContainer';

// type interface
interface CommonContainerProps {
  children: React.ReactNode;
}

const CommonContainer = ({ children }: CommonContainerProps) => {
  return (
    <div>
      <HeaderContaniner />
      <div style={{ marginTop: '20px' }}>{children}</div>
    </div>
  );
};

export default CommonContainer;
