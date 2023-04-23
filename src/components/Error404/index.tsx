import './Error404.css'
import Image from 'react-bootstrap/Image';

const Error404 = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Page not found</p>
      <div className="container-sm">
      <Image src="https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fluid />
      </div>
    </div>
  );
};

export default Error404;
