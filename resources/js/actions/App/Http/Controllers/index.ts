import Settings from './Settings'
import DocumentController from './DocumentController'
const Controllers = {
    Settings: Object.assign(Settings, Settings),
DocumentController: Object.assign(DocumentController, DocumentController),
}

export default Controllers