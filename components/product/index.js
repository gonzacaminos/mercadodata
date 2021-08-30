import  React  from 'react';
import  Image  from 'next/image';
import  Attribute  from './attribute';
import { formatMoney } from '@/components/utils';

export default function Product(props){
    const product = props.product
    const location = product.location.city ? product.location : false
    const condition = product.condition == 'used' ? 'usado' : 'nuevo'
    const image = product.pictures ? product.pictures[0].url : '/sin_imagen.jpg'

    return (
        <div className="max-w-4xl h-80 mt-20 mx-auto w-full bg-white flex rounded-md shadow-lg items-center">
            <div className="max-h-full w-3/6 h-full relative"><Image className="rounded-md rounded-tr-none rounded-br-none" src={image} layout='fill' objectFit='cover'/></div>
            <div className="md:ml-6 p-6 w-full">
                <a href={product.permalink} target="_blank"><h4 className="font-light text-2xl">{product.title}</h4></a>
                <div className="mt-4">
                    <div className="flex">
                        <Attribute className="w-1/5" label={"Condición"} value={condition} />
                        <Attribute className="w-2/5" label={"Creación"} value={product.date_created} format="date"/>
                        <Attribute className="w-2/5" label={"Última modificación"} value={product.last_updated} format="date"/>
                    </div>
                    <div className="flex">
                        <Attribute className="w-1/5" label={"Precio"} value={formatMoney(product.price)} />
                        <Attribute className="w-2/5" label={"Cantidad disponible"} value={product.available_quantity}/>
                        <Attribute className="w-2/5" label={"Total vendidos"} value={product.sold_quantity}/>
                    </div>
                    {location && <Attribute label={"Ubicación"} value={`${location.city.name}, ${location.state.name}, ${location.country.name}`}/> }
                </div>
            </div>
        </div>
    )
}