import DetailModalUI from './DetailModal.presenter'

const DetailModal = ({ detailOpened, detailOpen, detailClose }) => {
  return <DetailModalUI detailOpened={detailOpened} detailOpen={detailOpen} detailClose={detailClose} />
}

export default DetailModal
