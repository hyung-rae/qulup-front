import { BackgroundImage, Container, Text } from '@mantine/core'

const Home = () => {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?'

  return (
    <Container>
      {Array(40)
        .fill(0)
        .map((_, index) => (
          <Text size="lg" key={index} my="md" maw={600} mx="auto" c={'white'}>
            {lorem}
          </Text>
        ))}
    </Container>
  )
}

export default Home
