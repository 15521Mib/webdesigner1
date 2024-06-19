import data from '../../artigos1.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="busca" placeholder="clique aqui para pesquisar o que busca"/>
            <div className='grid grid-cols-3'>
                {
                    data.map( 
                        filme => (
                            <div className='lista-filmes w-[350px]' key={filme.title}>
                            <h1 >{filme.title}</h1>
                            <img src={filme.image} alt={filme.title} />
                            <div className='tag'>
                                {filme.tags.map(tag => (
                                    <span key={tag} className='text-purple-900'> {tag} </span>
                                ))}
                            </div>
                            <div className="texto">
                                {filme.text.map(texto => (

                                    <p key={texto}> {texto}</p>
                                ))}
                            </div>

                        </div>
                        )
                    )}
             </div>
        </main>
     );
}

export default Home;

{/* <div className='card'>
    <h1> Título do filme</h1>
    </img src>
</div> */}