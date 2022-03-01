import React, { useEffect, useState } from 'react';

function App (){
  const [produtos, setProdutos] = useState([])

  const fetchApi = async ()=>{
    const response = await fetch('/produtos')
    console.log(response)
    const responseJson = await response.json()
    setProdutos(responseJson)
  }

  useEffect(()=>{
    fetchApi()
  },[])

  return(
    <div> 
      <h1>Produtos 3</h1>

      {produtos && produtos.map(produto => {
        return(
          <div key={produto.id} style={{border :"solid", margin: "20px", padding: "10px"}}>
            <h3>{produto.nome}</h3>
            <h4>R$ {produto.preco}</h4>
          </div>
        )
      })}

      {console.log(produtos)}
    </div>
  )
}

export default App;
