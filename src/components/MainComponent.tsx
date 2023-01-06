import { UserType } from '../types/userType';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

interface MainContainerPropsType {
  usersData: Array<UserType.User>;
}
const MainComponent = ({ usersData }: MainContainerPropsType) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', gap: '15px' }}>
      {usersData.map((item: UserType.User) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardMedia component='img' alt='green iguana' height='140' image={item.avatar} />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div' color='text.primary'>
              first_name:{item.first_name}
            </Typography>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              color='text.secondary'
              sx={{ fontSize: 14 }}
            >
              last_name:{item.last_name}
            </Typography>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              color='text.primary'
              sx={{ fontSize: 12 }}
            >
              email: {item.email}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MainComponent;
