import  React, {useState, useEffect}  from 'react';
import Product from '@/components/product';
import { useRouter } from 'next/router'
import {updateQuery, extractID} from  '@/components/utils';
import Loader from '@/components/loader'
import classnames from 'classnames'

export default function Search() {

  const router = useRouter()
  const errors = { empty: 'No hay nada aquí, por favor busca algo.', invalid: 'Mmm eso no parece un link válido, intenta nuevamente.', loading: 'Buscando tu producto..' }
  const [query, setQuery] = useState(false)
  const [product, setProduct] = useState(false)
  const [error, setError] = useState(errors.empty)

  function getProduct(id){
    if(id){
      showError('loading')
      fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(res => res.json())
      .then(data => {
        if(!data.title){
          showError('invalid')
          return false;
        }
        setProduct(data)
        setError(false)
      })      
    } else {
      showError('invalid')
    }
  }

  function showError(error){
    setError(errors[error])
    setProduct(false)
  }

  useEffect(()=> {
    if(!query) {
      setQuery(decodeURI(router.query.q))
    }
  },[router.query])

  useEffect(()=> {
  
    if(query && query != ''){
      let id = extractID(query)
      getProduct(id)
      updateQuery(router, query)
    } else {
      showError('empty')
      updateQuery(router, '')
      setQuery('')
    }

  },[query])

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleChange(e){
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <div className="mt-12 md:mt-2 md:py-32">
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-white text-xl md:text-3xl font-black text-center mb-6 block">Pega el link o ID del producto que buscas</h2>
            <div className="flex relative">
              <input type="text" placeholder="Link o ID de producto" className={classnames({'shadow-error': !product && query}, {'shadow-none shadow-success': product},'text-base md:text-lg font-light bg-gray-100 px-4 py-3 w-full rounded-md outline-none')} onChange={handleChange} value={query}/>
            </div>
        </form>     
        {product.title ? (
           <Product product={product}/>
        ) : (
          <div className="text-center text-lg text-white font-black block my-28 md:mt-40">
            <p>{error}</p>
            <Loader className={`${error == errors.loading ? 'inline-block' : 'hidden'}`}/>

          </div> 
        )
        }
        
    </div>
  )
}