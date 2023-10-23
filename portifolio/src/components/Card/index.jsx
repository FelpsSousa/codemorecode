import { Button } from '../Button';
import { Tag } from '../../components/Tag';

import { Container } from './styles';

export function Card({ data, ...rest }) {

  return (
    <Container {...rest}>
      
      <h1>{data.title}</h1>
      
      <p>{data.description}</p>
      
      <img src="https://github.com/FelpsSousa.png" alt="Imagem de apresentação do projeto" />
      
      {
        <footer>
          {
            data.tags.map( tag => <Tag key={tag.name} title={tag.name} /> )
          }
        </footer>
      }

      <Button title="Ver mais"/>
    
    </Container>
  );

}