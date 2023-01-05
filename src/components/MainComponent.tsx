import { UserType } from '../types/userType';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

interface MainContainerPropsType {
  usersData: Array<UserType.User>;
}
const MainComponent = ({ usersData }: MainContainerPropsType) => {
  console.log(usersData);
  return (
    <div>
      {usersData.map((item: UserType.User) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component='img' alt='green iguana' height='140' />
          {item.avatar}
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {item.first_name}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              {item.last_name}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              {item.email}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              test
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MainComponent;
