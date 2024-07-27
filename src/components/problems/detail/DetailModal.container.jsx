import DetailModalUI from './DetailModal.presenter'

const DetailModal = ({ ...props }) => {
  const { detailOpened, detailOpen, detailClose } = props
  return <DetailModalUI detailOpened={detailOpened} detailOpen={detailOpen} detailClose={detailClose} />
}

export default DetailModal
