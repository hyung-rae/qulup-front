import { Card, Overlay, Button, Text } from '@mantine/core'
import classes from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          난이도 A
        </Text>

        <Text size="sm" className={classes.description}>
          Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific
        </Text>

        <Button className={classes.action} variant="white" color="dark" size="xs">
          구매하기
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard
