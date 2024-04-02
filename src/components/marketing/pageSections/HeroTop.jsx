import Illustration from '../../../medias/images/background/bg-food.jpg'
export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
      <div className="bg-repeat w-full h-full" style={{ backgroundImage: `url(${Illustration})`}}></div>
        
    </div>
  )
}
