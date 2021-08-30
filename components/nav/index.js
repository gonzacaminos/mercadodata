import  React  from 'react';
import  Image  from 'next/image';

export default function Nav() {
  return (
    <nav>
        <div className="text-white">
            <Image src="logo.png" width={238} height={30} unoptimized={true} quality={100}/>
        </div>      
    </nav>
  )
}