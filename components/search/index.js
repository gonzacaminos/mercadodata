import  React, {useState, useEffect}  from 'react';
import Image from 'next/image'

export default function Search() {

  const [id, setID] = useState(false)
  const [product, setProduct] = useState(false)

  useEffect(()=> {
    console.log("effect",id)
    if(id){
      fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
    } else {
      setProduct(false)
    }
    
  },[id])

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleChange(e){
    e.preventDefault()
    let _query = e.target.value
    let rule = /M\w+-?\d+/g
    if(_query !== ''){
      let id = _query.match(rule)[0].replace('-','')
      setID(id)
    } else {
      setID(false)
    }
 
  }

  return (
    <div className="mt-20">
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <label className="text-white text-3xl font-black text-center mb-6 block">Pegá el link del producto que buscas</label>
            <div className="flex relative">
              <input type="text" placeholder="Link de producto" className="text-lg font-light bg-gray-100 px-4 py-3 w-full rounded-md rounded-tr-none rounded-br-none outline-none" onChange={handleChange}/>
              <button className="bg-black py-4 px-6 h-full flex items-center hover:bg-gray-900 text-white rounded-md rounded-tl-none rounded-bl-none outline-none" type="submit">
                <Image src="/search.png" width={22} height={25} unoptimized={true} priority={true}/>
              </button>
            </div>
        </form>     
        {product ? (
          <p className="text-white">{product.title}</p>
        ) : (
          <p className="text-center text-lg text-white font-black block mt-40">No hay nada aquí, por favor busca algo.</p> 
        )
        }
        
    </div>
  )
}