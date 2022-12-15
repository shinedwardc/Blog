import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

//import posts from '../Modules/Posts'

const Header = () => {

  // const PostLink = (post) => {
  //   console.log(post.key.toString());
  //   let link = "/post/" + post.key.toString();
  //   console.log(link);
  //   return link;
  // }

  return ( 
    <Navbar bg="dark" variant = "dark" expand="lg">
        <Navbar.Brand style = {{padding: 20}}>Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <LinkContainer to = "/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title = {<MoreHorizRoundedIcon/>} id = "collapsible-nav-dropdown">
              {posts.map((post) => (
                <LinkContainer key = {post.key} to = {PostLink(post)}>
                  <NavDropdown.Item key = {post.key}>{post.title}</NavDropdown.Item>  
                </LinkContainer>
              ))}
            </NavDropdown> */}
            <LinkContainer to = "/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>

    </Navbar>

    // <Navbar bg = "light" expand = "lg">
    //   <Container>
    //     <LinkContainer to = "/">
    //       <Navbar.Brand>Home</Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls = "basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <LinkContainer to="/about">
    //         <Nav.Link>About</Nav.Link>
    //       </LinkContainer>
    //       <LinkContainer to="/contact">
    //         <Nav.Link>Contact</Nav.Link>
    //       </LinkContainer>
    //     </Nav>
    //   </Navbar.Collapse>  
    //   </Container>    
    // </Navbar>
  )
}

export default Header