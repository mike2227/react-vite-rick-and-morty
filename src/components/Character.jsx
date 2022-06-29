function Character({ character }) {
  return (
    <div className="text-center p-4">
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
        <div>
            <p>{character.species} - {character.status} - {character.gender} </p>
        </div>
    </div>
  )
}

export default Character
