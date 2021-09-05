import  React  from 'react';
import  Image  from 'next/image';
import  Attribute  from './attribute';
import { formatMoney } from '@/components/utils';

export default function Product(props){
    const translations = {
        "used": "usado",
        "new": "nuevo",
        "paused": "pausada",
        "closed": "cerrada",
        "active": "Activa"
    }
    const product = props.product
    const location = product.location.city ? product.location : false
    const condition = product.condition == 'used' ? 'usado' : 'nuevo'
    const status = product.condition == 'used' ? 'usado' : 'nuevo'
    const image = product.pictures ? product.pictures[0].url : '/sin_imagen.jpg'

    return (
        <div className="max-w-4xl md:h-96 mt-20 mx-auto w-full bg-white md:flex rounded-md shadow-lg items-center">
            <div className="max-h-full h-48 md:w-3/6 md:h-full relative"><Image className="rounded-md rounded-tr-none rounded-br-none" alt={`Imagen de producto ${product.title}`} src={image} layout='fill' objectFit='cover'/></div>
            <div className="md:ml-6 p-6 md:w-full">
                <a href={product.permalink} target="_blank"><h4 className="font-light text-lg md:text-2xl">{product.title}</h4></a>
                <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
                        <Attribute label={"Condición"} value={translations[product.condition]} />
                        <Attribute label={"Precio"} value={formatMoney(product.price)} />
                        <Attribute label={"Estado de publicación"} value={translations[product.status]} />
                        <Attribute label={"Creación"} value={product.date_created} format="date"/>
                        <Attribute label={"Última modificación"} value={product.last_updated} format="date"/>
                        <Attribute label={"Cantidad disponible"} value={product.available_quantity}/>
                        <Attribute label={"Total vendidos"} value={product.sold_quantity}/>
                       
                        
                    </div>
                    <Attribute label={"Garantía"} value={product.warranty}/>
                    {location && <Attribute label={"Ubicación"} value={`${location.city.name}, ${location.state.name}, ${location.country.name}`}/> }
                </div>
            </div>
        </div>
    )
}