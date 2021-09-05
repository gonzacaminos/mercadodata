import  React  from 'react';

export default function Attribute(props){

    function formatDate(_date){
        let date = new Date(_date)
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString('es-AR')
    }

    const value = props.format == 'date' ? formatDate(props.value) : props.value
    return (
        <div className={`mt-6 ${props.className}`}>
            <p className="text-xs text-gray-600 mb'2">{props.label}</p>
            <p className="text-sm text-astronaut capitalize">{value}</p>
        </div>
    )
}