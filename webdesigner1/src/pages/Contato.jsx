function Contato() {
    return ( 
        <div className="flex justify-center flex-col w-full">
          <div className="text-center d-flex flex-wrap justify-center" id="proposta">
            <div className="p-2">
              <h2 className="text-blue-500 mb-3" id="contato" >Entre em Contato ao caso de Duvidas é problemas</h2>
              <p className="text-blue-500">Endereço: R. Riachuelo, 1788, Padre Eustáquio</p>
              <p className="text-blue-500"> Telefone: (11+) 6985-3496</p>
              <p className="text-blue-500"> E-mail: MovieApp@gmail.com.br</p>
              <h2 className="text-blue-500 mb-3" id="contato">Horário de Atendimento:</h2>
            </div>
          </div>
      
      <div className="text-center d-flex justify-center">
        <div className="content">
          <h2 className="text-blue-500 mb-5">Localização</h2>
          <img className="my-0 mx-auto" src="local.png" alt="" style={{ height: 'auto', width: '80vw'}}/>
          <p className="text-blue-500 text-center">Estado: Belo Horizonte</p>
          <p className="text-blue-500 text-center">Segunda a Sexta: 9:00 - 18:00</p>
          <p className="text-blue-500 text-center">Sábado e Domingo: 9:00 - 13:00</p>
        </div>
      </div>
    </div>
  );
}

export default Contato;