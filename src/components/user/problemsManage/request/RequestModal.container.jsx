import { useForm } from '@mantine/form'
import RequestModalUI from './RequestModal.presenter'

const RequestModal = ({ ...props }) => {
  const { reQuestOpened, reQuestOpen, reQuestClose } = props
  const form = useForm({
    initialValues: {
      email: '',
      phone: '',
      order: '',
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  })

  return (
    <>
      <RequestModalUI form={form} reQuestOpened={reQuestOpened} reQuestOpen={reQuestOpen} reQuestClose={reQuestClose} />
    </>
  )
}

export default RequestModal
