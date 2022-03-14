import React, { useState } from 'react'
import Search from './Search'

function Pokedex() {
 const [name, setName] = useState("pikachu")
 const [imageUrl, setImageUrl] = useState("")
 const [id, setId] = useState("")
 const [abilitie1, setAbilitie1] = useState("")
 const [abilitie2, setAbilitie2] = useState("")
 const [hp, setHp] = useState("")
 const [attack, setAttack] = useState("")
 const [defense, setDefense] = useState("")
 const [specialAttack, setSpecialAttack] = useState("")
 const [specialDefense, setSpecialDefense] = useState("")
 const [type1, setType1] = useState("")
 const [type2, setType2] = useState("")

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
        setType1(data.types[0].type.name)
        if (data.types[1] != null) {
          setType2(data.types[1].type.name)
        }

        const Type1 = document.getElementById('type1')
        const Type2 = document.getElementById('type2')

        console.log(type1);
        switch (type1) {
          case "grass":
            Type1.classList.add("grass")
            break;
          case "fire":
            Type1.classList.add("fire")
            break;
          case "water":
            Type1.classList.add("water")
            break;
          case "ice":
            Type1.classList.add("ice")
            break;
          case "flying":
            Type1.classList.add("flying")
            break;
          case "fairy":
            Type1.classList.add("fairy")
            break;
          case "dragon":
            Type1.classList.add("dragon")
            break;
          case "steel":
            Type1.classList.add("steel")
            break;
          case "normal":
            Type1.classList.add("normal")
            break;
          case "ghost":
            Type1.classList.add("ghost")
            break;
          case "poison":
            Type1.classList.add("poison")
            break;
          case "dark":
            Type1.classList.add("dark")
            break;
          case "fighting":
            Type1.classList.add("fighting")
            break;
          case "bug":
            Type1.classList.add("bug")
            break;
          case "ground":
            Type1.classList.add("ground")
            break;
          case "psychic":
            Type1.classList.add("psychic")
            break;
          case "electric":
            Type1.classList.add("electric")
            break;
          case "rock":
            Type1.classList.add("rock")
            break;

          default:
            break;
        }
        if (Type2 != null){
          switch (type2) {
            case "grass":
              Type2.classList.add("grass")
              break;
            case "fire":
              Type2.classList.add("fire")
              break;
            case "water":
              Type2.classList.add("water")
              break;
            case "ice":
              Type2.classList.add("ice")
              break;
            case "flying":
              Type2.classList.add("flying")
              break;
            case "fairy":
              Type2.classList.add("fairy")
              break;
            case "dragon":
              Type2.classList.add("dragon")
              break;
            case "steel":
              Type2.classList.add("steel")
              break;
            case "normal":
              Type2.classList.add("normal")
              break;
            case "ghost":
              Type2.classList.add("ghost")
              break;
            case "poison":
              Type2.classList.add("poison")
              break;
            case "dark":
              Type2.classList.add("dark")
              break;
            case "fighting":
              Type2.classList.add("fighting")
              break;
            case "bug":
              Type2.classList.add("bug")
              break;
            case "ground":
              Type2.classList.add("ground")
              break;
            case "psychic":
              Type2.classList.add("psychic")
              break;
            case "electric":
              Type2.classList.add("electric")
              break;
            case "rock":
              Type2.classList.add("rock")
              break;
            default:
              break;
          }
        }

      });
  }

  const params = new URLSearchParams(document.location.search)
  let poke = params.get("name")

  if (poke === null){
    poke = "pikachu"
    getPokemon(poke)
  }
  else{
    getPokemon(poke)
  }


  return (
      <div className='pokedex-page'>
        <div className='pokedex' >
          <Search />
          <div className='contents'>
            <div className='pokemon'>
            <h1>{name}</h1>
            <div className='types'>
              <p id="type1">{type1}</p>
              <p id="type2">{type2}</p>
            </div>
              <img src={imageUrl} height="500px" alt='img'/>
            </div>
            <div className='description'>
              <h2># {id}</h2>
              <p>{abilitie1}</p>
              <p>{abilitie2}</p>
            <div className='stats'>
              <p className='stat'>Hp: {hp}</p>
              <p className='stat'>Atk: {attack}</p>
              <p className='stat'>Def: {defense}</p>
              <p className='stat'>Sp-Atk: {specialAttack}</p>
              <p className='stat'>Sp-Def: {specialDefense}</p>
            </div>
            </div>
          </div>
        </div>
      <a className='back-btn' href="/">back</a>
      </div>
  )
}

export default Pokedex
