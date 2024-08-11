import DetailModalUI from './DetailModal.presenter'

const DetailModal = ({ ...props }) => {
  const handleRecommendClick = () => {}
  return <DetailModalUI {...props} handleRecommendClick={handleRecommendClick} />
}

export default DetailModal
