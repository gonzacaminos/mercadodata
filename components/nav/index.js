import  React  from 'react';
import  Image  from 'next/image';

export default function Nav() {
  return (
    <nav>
        <div className="w-2/3 md:w-full mx-auto">
            <Image src="/images/logo.png" width={238} height={30} unoptimized={true} quality={100}/>
        </div>      
    </nav>
  )
}