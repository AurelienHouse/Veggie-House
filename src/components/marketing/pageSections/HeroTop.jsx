import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Products from '../../../medias/images/heroTop/burger-hero-top.png'

export default function HeroTop() {
  return (
    <div className="bg-primary w-full h-screen">
      <div className="bg-repeat w-full h-full" style={{ backgroundImage: `url(${Illustration})`}}>

        <Container>
          <Header />
          <div className=" w-full flex items-center">
            <div className=" text-secondary uppercase w-2/3">
              <h1 className='mb-7'>Le moment de goûter au bon goût des hamburgers.</h1>
              <h2 className="font-secondary">
                <span className='text-8xl block'>Burger</span>
                <span className='text-6xl'>House</span> 
                <span className="text-4xl ml-3">Click&Collect</span></h2>

            </div>
            <div className=" w-full">
              <img src={Products} alt="image d'un menu Hamburger frites et soda" className="" />
            </div>
          </div>
        </Container>

      </div>
    </div>
  )
}
