import { Button } from '../Button';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Card({ data, ...rest }) {

  return (
    <Container {...rest}>
      
      <h1>{data.title}</h1>
      
      <p>{data.description}</p>
      
      <img src={data.image} alt={data.title} />
      
      {
        <footer>
          {
            data.tags.map( tag => <strong> {tag.name} </strong>)
          }
        </footer>
      }

      <Link to={data.link} target="_blank">
        <Button title="Ver mais"/>
      </Link>
    
    </Container>
  );

}