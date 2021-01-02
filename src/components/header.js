import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#'>
          <img
            alt='worksmile'
            src='worksmile_logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          WorkSmile
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;