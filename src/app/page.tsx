import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => (
  <Grid container direction='column' alignItems='center'>
    <Typography variant='h1'>Next Boilerplate</Typography>
    <Link href='https://github.com/luckasnix/next-boilerplate' target='_blank' rel='noopener'>
      <Button variant='contained'>Go to the repository</Button>
    </Link>
  </Grid>
);

export default Home;
