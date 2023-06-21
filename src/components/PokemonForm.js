import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmittedPoke}) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontImg, setFrontImg] = useState('')
  const [backImg, setBackImg] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: null, 
        name, 
        hp, 
        sprites: {front: frontImg, back: backImg}})
    })
    .then(r => r.json())
    .then((newPoke) => handleSubmittedPoke(newPoke))
    setName('')
    setHp('')
    setFrontImg('')
    setBackImg('')
  }

  function handleName(e){
    setName(e.target.value)
  }
 

  function handleHp(e){
    setHp(e.target.value)
  }
  function handleFrontImg(e){
    setFrontImg(e.target.value)
  }

  function handleBackImg(e){
    setBackImg(e.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleName}fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleHp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleFrontImg}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleBackImg}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
