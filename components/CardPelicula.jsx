import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPelicula = ({listaPeliculas}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{listaPeliculas.nombrePelicula}</Card.Title>
          <Card.Text>
            {listaPeliculas.descripcionPelicula}
            </Card.Text>
            <Card.Text>
            {listaPeliculas.generoPelicula}
            </Card.Text>
          
        </Card.Body>
      </Card>
    );
   
};

export default CardPelicula;