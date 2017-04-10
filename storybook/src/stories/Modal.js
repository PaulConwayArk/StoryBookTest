import ModalView from '../components/Modal.js'

storiesOf('Bootstrap Modal', module)
.addWithInfo('default', () => (
  <ModalView
      modalTitle={'modalTitle'},
      modalBody={'modalBody'}
  />
))
