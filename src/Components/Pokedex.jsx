import React, { useState } from 'react'
import Search from './Search'

function Pokedex() {
 const [name, setName] = useState("")
 const [imageUrl, setImageUrl] = useState("")
 const [id, setId] = useState("")
 const [abilitie1, setAbilitie1] = useState("")
 const [abilitie2, setAbilitie2] = useState("")
 const [hp, setHp] = useState("")
 const [attack, setAttack] = useState("")
 const [defense, setDefense] = useState("")
 const [specialAttack, setSpecialAttack] = useState("")
 const [specialDefense, setSpecialDefense] = useState("")


  const getPokemon = (pokemon) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setImageUrl(data.sprites.front_default)
        setName(data.forms[0].name.toUpperCase())
        setId(data.id)
        setAbilitie1(data.abilities[0].ability.name)
        setAbilitie2(data.abilities[1].ability.name)
        setHp(data.stats[0].base_stat)
        setAttack(data.stats[1].base_stat)
        setDefense(data.stats[2].base_stat)
        setSpecialAttack(data.stats[3].base_stat)
        setSpecialDefense(data.stats[4].base_stat)
      });
  }

  const params = new URLSearchParams(document.location.search)
  let poke = params.get("name")
  getPokemon(poke)

  return (
      <div className='pokedex-page'>
        <div className='pokedex' >
          <Search />
          <div className='contents'>
            <div className='pokemon'>
            <h1>{name}</h1>
              <img src={imageUrl} height="300px" alt='img'/>
            </div>
            <div className='description'>
              <h2># {id}</h2>
              <p>{abilitie1}</p>
              <p>{abilitie2}</p>
            <div className='stats'>
              <p>Hp: {hp}</p>
              <p>Attack: {attack}</p>
              <p>Defense: {defense}</p>
              <p>Special Attack: {specialAttack}</p>
              <p>Special Defense: {specialDefense}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pokedex
