import React from 'react';
import { Form,Button } from 'react-bootstrap';
import { useState, useEffect} from 'react';

import CardPelicula from './CardPelicula';

const FormularioPelicula = () => {
 
    const peliculasLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || []
    const [listaPeliculas, setlistaPeliculas] = useState(peliculasLocalStorage)
    const [nombrePelicula, setnombrePelicula] = useState("")
    const [descripcionPelicula, setdescripcionPelicula] = useState("")
    const [generoPelicula, setgeneroPelicula] = useState("")
    



    useEffect( ()=>{
        localStorage.setItem('peliculas', JSON.stringify(listaPeliculas))
    })

    const guardarPeliculas = (e) =>{
    e.preventDefault()
    const nuevaPelicula = {nombrePelicula, descripcionPelicula, generoPelicula}
    setlistaPeliculas([...listaPeliculas, nuevaPelicula])
    


    }

    return (
        <>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Nombre"  onChange={(e)=>setnombrePelicula(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control placeholder="Descripcion" onChange={(e)=>setdescripcionPelicula(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genero</Form.Label>
          <Form.Select onChange={(e)=>setgeneroPelicula(e.target.value)} >
            <option>Comedia</option>
            <option>Drama</option>
            <option>Infantil</option>
          </Form.Select>
        </Form.Group>
        <Button onClick={guardarPeliculas} variant="primary" className='my-3'>Guardar</Button>
        {

        listaPeliculas.map((item, posicionItem)=> <CardPelicula key={posicionItem} listaPeliculas={item}></CardPelicula>) 
        }
      </>
    );
};

export default FormularioPelicula;