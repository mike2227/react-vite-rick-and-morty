import { useEffect, useState } from 'react'
import Character  from '../components/Character'
import '../css/loading.css'

function NextPage({page, setPage}) {
    return <>
       <div className='text-center'>
        <p>Page: { page + 0 }</p>
       </div>
        <header className='d-flex justify-content-between align-items-center'>
            <button className='btn btn-primary btn-sm' onClick={() => setPage(page - 1)}>
                Page { page - 1}
            </button>
            <button className='btn btn-primary btn-sm' onClick={() => setPage(page + 1)}>
                Siguiente { page + 1 }
            </button>
        </header>
    </>
}

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page , setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setCharacters(data.results)
            //funcion settimeout para que se muestre el loading
            setTimeout(() => {
                setLoading(false)
            },(2000))
        }
        fetchData()
    }, [page])

    return (
        <div className='container'>
            {loading ? (
                <div class="loader">
                    <span>Cargando</span>
                </div>
            ) : (
                <>
                    <NextPage page={page} setPage={setPage}/>
                    <div className='row'>
                        {characters.map((character) => {
                            return (
                                <div className='col-md-4' key={character.id} >
                                    <Character character = {character}/>
                                </div>
                            );
                        })}
                    </div>
                    <NextPage page={page} setPage={setPage}/>
                </>
            )}
        </div>
    )
}

export default CharacterList