import Logo from '../../../medias/svg/Logo-burger-house.svg'

export default function Header() {
  return (
    <div className='flex items-center justify-between'>
          <img src={Logo} alt='logo Burger House App' className='w-64'/>

    </div>
  )
}
