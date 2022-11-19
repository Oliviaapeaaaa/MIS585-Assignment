import Link from 'next/link'
import logo from '../public/images/logo.jpeg'
export default function Header() {
  return (
    <header>
      <div className='container'>
        
          <h2> BrightView</h2>
          <div className="land__header-image">
            <img  public={logo}  />
          </div>
       
      </div>
      
    </header>

    
  )
}
