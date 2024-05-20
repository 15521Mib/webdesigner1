import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <inpunt type="text" name="busca" id="busca" placeholder="clique aqui para pesquisar o que busca"/>
            <div className='lista-filmes'>
                {
                    data.map( 
                        filme => (
                            <h1 key={filme.title}>{filme.title}</h1>
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