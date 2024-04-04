import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";
import HeadingTitle from "../../elements/DisplayTitles/HeadingTitle";
import Button from "../../elements/Button"
import Product01 from "../../../medias/images/products/Product-1.jpg"
import Product02 from "../../../medias/images/products/Product-2.jpg"
import Product03 from "../../../medias/images/products/Product-3.jpg"

export default function Products() {
  return (
    <Container>

        <HeadingTitle variant='h3'>
            Toujours des délicieux Burgers
        </HeadingTitle>

        <Heading theme = "secondary">
            Choisissez et savourez
        </Heading>

        <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum atque labore consequatur perferendis, molestias ipsam quas et accusamus a veritatis quasi iure amet harum, distinctio quaerat aliquam repudiandae fuga!
        </p>

        <div className="grid grid-cols-3 gap-x-1 mb-20 mt-10">

            <div className="w-full h-full ">
                <div className="relative w-full h-72">
                    <img src={Product01} alt="image d'un burger avec une viande bien epaise" className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0" />
                </div>

                <div className="flex flex-col items-center justify-center px-5 pb-5">
                <Heading variant="h3">
                    Lorem Ipsum dolor
                </Heading>
                <p className="text-center">
                    Lorem ipsum dolor is simply text for designer and developper.
                </p>
                <Button className="font-secondary" color="danger">
                    Commandez
                </Button>
                </div>
            </div>

            <div className="w-full h-full ">
                <div className="relative w-full h-72">
                    <img src={Product02} alt="image d'un burger avec une viande bien epaise" className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0" />
                </div>

                <div className="flex flex-col items-center justify-center px-5 pb-5">
                <Heading variant="h3">
                    Lorem Ipsum dolor
                </Heading>
                <p className="text-center">
                    Lorem ipsum dolor is simply text for designer and developper.
                </p>
                <Button className="font-secondary" color="danger">
                    Commandez
                </Button>
                </div>
            </div>

            <div className="w-full h-full ">
                <div className="relative w-full h-72">
                    <img src={Product03} alt="image d'un burger avec une viande bien epaise" className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0" />
                </div>

                <div className="flex flex-col items-center justify-center px-5 pb-5">
                <Heading variant="h3">
                    Lorem Ipsum dolor
                </Heading>
                <p className="text-center">
                    Lorem ipsum dolor is simply text for designer and developper.
                </p>
                <Button className="font-secondary" color="danger">
                    Commandez
                </Button>
                </div>
            </div>
            

        </div>


    </Container>
    
  )
}
