import MindMap from './index'
import MiniMap from './src/plugins/MiniMap.js'
import Watermark from './src/plugins/Watermark.js'
import KeyboardNavigation from './src/plugins/KeyboardNavigation.js'
import ExportXMind from './src/plugins/ExportXMind.js'
import ExportPDF from './src/plugins/ExportPDF.js'
import Export from './src/plugins/Export.js'
import Drag from './src/plugins/Drag.js'
import Select from './src/plugins/Select.js'
import AssociativeLine from './src/plugins/AssociativeLine'
import RichText from './src/plugins/RichText'
import NodeImgAdjust from './src/plugins/NodeImgAdjust.js'
import TouchEvent from './src/plugins/TouchEvent.js'
import Search from './src/plugins/Search.js'
import Painter from './src/plugins/Painter.js'
import Scrollbar from './src/plugins/Scrollbar.js'
import Formula from './src/plugins/Formula.js'
import xmind from './src/parse/xmind.js'
import markdown from './src/parse/markdown.js'
import icons from './src/svg/icons.js'
import * as constants from './src/constants/constant.js'
import themes from './src/themes/index.js'
import * as defaultTheme from './src/themes/default.js'

MindMap.xmind = xmind
MindMap.markdown = markdown
MindMap.iconList = icons.nodeIconList
MindMap.constants = constants
MindMap.themes = themes
MindMap.defaultTheme = defaultTheme
MindMap.version = '0.9.4'

MindMap.usePlugin(MiniMap)
  .usePlugin(Watermark)
  .usePlugin(Drag)
  .usePlugin(KeyboardNavigation)
  .usePlugin(ExportXMind)
  .usePlugin(ExportPDF)
  .usePlugin(Export)
  .usePlugin(Select)
  .usePlugin(AssociativeLine)
  .usePlugin(RichText)
  .usePlugin(TouchEvent)
  .usePlugin(NodeImgAdjust)
  .usePlugin(Search)
  .usePlugin(Painter)
  .usePlugin(Scrollbar)
  .usePlugin(Formula)

export default MindMap
