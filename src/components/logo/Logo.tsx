import {AiOutlineCloud} from 'react-icons/ai'

export default function Logo() {
  return (
    <div className='logo-container'>
      <AiOutlineCloud aria-label='icon' className='logo-icon'/>
      <h1 className='logo-text'>Weather App</h1>
    </div>
  )
}
