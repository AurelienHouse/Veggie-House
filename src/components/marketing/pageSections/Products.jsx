import Container from "../../elements/Container";
import Heading from "../../elements/DisplayTitles/Heading";
import HeadingTitle from "../../elements/DisplayTitles/HeadingTitle";

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


    </Container>
    
  )
}
