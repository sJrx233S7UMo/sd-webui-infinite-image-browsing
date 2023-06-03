import { createI18n } from 'vue-i18n'

const zh = {
  //! MissingTranslations: "像这样标记缺失的翻译" ← i just translated it with google translate ♥
  errorOccurred: '发生了个错误',
  useThumbnailPreview: '使用缩略图预览',
  smallerIntervalMeansMoreNetworkTraffic: '越小对网络压力越大',
  gridThumbnailWidth: '网格缩略图宽度',
  largeGridThumbnailWidth: '大尺寸网格缩略图宽度',
  start: '开始',
  tip: '提示',
  startedAt: '开始于：',
  sortByDateAscending: '修改日期升序',
  sortByDateDescending: '修改日期降序',
  sortByCreatedDateAscending: '创建日期升序',
  sortByCreatedDateDescending: '创建日期降序',
  sortByNameAscending: '名称升序',
  sortByNameDescending: '名称降序',
  sortBySizeAscending: '大小升序',
  sortBySizeDescending: '大小降序',
  inputAddressAndPressEnter: '输入地址回车',
  go: '前往',
  unknownError: '未知错误',
  loadingNextFolder: '即将加载下一个文件夹的文件',
  moveFailedCheckPath: '移动失败，检查你的路径输入',
  detailList: '详情列表',
  previewGrid: '预览网格',
  largePreviewGrid: '大尺寸预览网格',
  sortBy: '按照',
  moveSelectedFilesTo: '下列文件移动至',
  confirm: '确定?',
  download: '下载',
  local: '本地',
  sendImageFailed: '发送图像失败，请携带console的错误消息找开发者',
  confirmDelete: '确认删除？',
  deleteSuccess: '删除成功',
  doubleClickToCopy: '双击复制',
  root: '根',
  drive: '盘',
  refresh: '刷新',
  quickMove: '快速移动',
  more: '更多',
  viewMode: '查看模式',
  sortingMethod: '排序方法',
  copyPath: '复制路径',
  deleteSelected: '删除',
  previewInNewWindow: '在新窗口预览',
  copySourceFilePreviewLink: '复制源文件预览链接',
  viewGenerationInfo: '查看生成信息(prompt等)',
  sendToTxt2img: '发送到文生图',
  sendToImg2img: '发送到图生图',
  sendToInpaint: '发送到局部重绘',
  sendToControlNet: '发送到ControlNet',
  sendToExtraFeatures: '发送到附加功能',
  loadNextPage: '加载下一页',
  localFile: '本地文件',
  globalSettings: '全局设置',
  welcome: '欢迎',
  openInNewWindow: '在新页面打开',
  restoreLastRecord: '还原上次记录',
  launch: '启动',
  walkMode: '使用 Walk 模式浏览图片',
  launchFromQuickMove: '从快速移动启动',
  recent: '最近',
  emptyStartPage: '空启动页',
  t2i: '文生图',
  i2i: '图生图',
  saveButtonSavesTo: '保存',
  extra: '附加',
  gridImage: '宫格图',
  'i2i-grid': '图生图网格',
  image: '图像',
  't2i-grid': '文生图宫格',
  workingFolder: '工作文件夹',
  lang: '语言',
  langChangeReload: '重新加载: 一些变化可能需要在重新加载后生效',
  hypernetworks: '超网络模型',
  openOnTheRight: '在右边打开',
  openInNewTab: '在新标签打开',
  openWithWalkMode: '使用 Walk 模式打开',
  longPressOpenContextMenu: '支持使用长按打开右键菜单',
  searchResults: '搜索结果',
  imgSearch: '图像搜索',
  onlyFoldersAndImages: '只显示文件夹和图像',
  send2savedDir: '发送到保存的文件夹',
  unknownSavedDir: '找不到保存的文件夹（配置文件中的outdir_save字段）',
  Model: '模型',
  Sampler: '采样器',
  lora: 'LoRA',
  size: '尺寸',
  pos: '正面提示',
  generateIndexHint: '生成索引用于搜索图像',
  UpdateIndex: '更新索引',
  needGenerateIdx: '你需要先点击按钮生成索引用于搜索图像\n这个过程可能需要消耗几分钟',
  search: '搜索',
  custom: '自定义',
  add: '新增',
  cancel: '取消',
  submit: '提交',
  existInOtherType: '已存在于其他类型',
  alreadyExists: '已存在',
  toggleTag: '切换标签选中 (收藏)',
  addComplete: '添加完成',
  removeComplete: '删除完成',
  addedTagToImage: '已添加标签 "{tag}" 到本图片',
  removedTagFromImage: '已从本图片上移除 "{tag}" 标签',
  openContextMenu: '打开上下文菜单',
  copyPrompt: '复制提示',
  refreshCompleted: '刷新完成',
  'walk-mode-move-message': '在walk模式下仅允许使用“快速移动”移动位置',
  long_loading:
    '已经连续加载超过5秒，这可能在一会后恢复，如果一直发生这种问题请查看FAQ自行解决或者提issue',
  manualExitFullScreen: '你删除了最后一张图片，也许需要你手动退出全屏预览',
  copied: '已复制！',
  'index.expired': '索引过期，正在自动更新',
  'auto.refreshed': '自动刷新完成！',
  exactMatch: '完全匹配',
  anyMatch: '匹配任意',
  exclude: '排除掉',
  selectExactMatchTag: '选择完全匹配的 Tag',
  selectAnyMatchTag: '可选,选择匹配其中一个或多个的 Tag',
  selectExcludeTag: '可选，选择需要排除掉的 Tag',
  faq: '常见问题',
  autoUpdate: '检测到发生改变自动更新',
  'fuzzy-search': '模糊搜索',
  'fuzzy-search-placeholder': '输入图像信息或者文件名的一部分来进行搜索',
  'fuzzy-search-noResults': '什么都没找到',
  openWithLocalFileBrowser: '使用本地文件浏览器打开',
  addToSearchScanPathAndQuickMove: '添加到搜索扫描路径和快速移动',
  removeFromSearchScanPathAndQuickMove: '从搜索扫描路径和快速移动中移除',
  serverKeyRequired: '服务器配置了密匙，你必须提供相同的密匙才能继续使用',
  shortcutKey: '快捷键（仅允许在全屏预览下使用）',
  shortcutKeyDescription: '点击输入框按下你想使用的案件，支持与Shift和Ctrl进行组合',
  fullscreenRestriction: '受技术限制，当前拓展不允许删除打开全屏预览时的首张图片。',
  clear: '清除',
  toggleTagSelection: '切换 "{tag}" 标签选中',
  changlog: '更新日志'
}
const en: Record<keyof typeof zh, string> = {
  //! MissingTranslations: "Mark missing translations like this""shortcutKey": "Keyboard Shortcuts",
  //! MissingTranslations
  changlog: 'Change log',
  clear: 'Clear',
  toggleTagSelection: 'Toggle Selection of Tag "{tag}"',
  fullscreenRestriction:
    'Due to technical limitations, the first image cannot be deleted when opening the fullscreen preview.',
  shortcutKey: 'Keyboard Shortcuts (Only Available in full-screen preview mode)',
  shortcutKeyDescription:
    'Click on the input box and press the shortcut key you want to use, supporting combinations with Shift and Ctrl.',
  serverKeyRequired:
    'The server has configured a key. You must provide the same key to continue using it.',
  removeFromSearchScanPathAndQuickMove: 'Remove from Search Scan Path and Quick Move',
  addToSearchScanPathAndQuickMove: 'Add to Search Scan Path and Quick Move',
  openWithLocalFileBrowser: 'Open with Local File Browser',
  'fuzzy-search-noResults': 'Nothing was found',
  'fuzzy-search-placeholder': 'Enter a part of the image information or filename to search',
  'fuzzy-search': 'Fuzzy search',
  autoUpdate: 'Detected changes, automatically updating',
  faq: 'FAQ',
  selectExactMatchTag: 'Select Exact Match Tags',
  selectAnyMatchTag: 'Optional, Select Any Match Tags',
  selectExcludeTag: 'Optional, Select Exclude Tags',
  exactMatch: 'Exact Match',
  anyMatch: 'Match Any',
  exclude: 'Exclude',
  'auto.refreshed': 'Auto refresh completed!',
  copied: 'Copied!',
  'index.expired': 'Index expired, updating automatically',
  manualExitFullScreen:
    'You have deleted the last image and may need to manually exit full-screen preview',
  long_loading:
    'Loading has been taking more than 5 seconds, it may recover shortly. If this issue persists, please check the FAQ for a solution or open an issue.',
  'walk-mode-move-message': "Moving position is only allowed using 'Quick Move' in walk mode",
  refreshCompleted: 'Refresh completed',
  //! MissingTranslations
  addedTagToImage: 'Tag "{tag}" has been added to this image',
  removedTagFromImage: 'Tag "{tag}" has been removed from this image',
  openContextMenu: 'Open context menu',
  copyPrompt: 'Copy prompt',
  toggleTag: 'Toggle Tag Selection (Favorite)',
  addComplete: 'Add complete',
  removeComplete: 'Remove Complete',
  existInOtherType: 'Already exists in other type',
  alreadyExists: 'Already exists',
  cancel: 'Cancel',
  submit: 'Submit',
  add: 'Add',
  custom: 'Custom',
  needGenerateIdx:
    'You need to click the button to generate an index for searching images. \n This process may take a few minutes to complete.',
  search: 'Search',
  UpdateIndex: 'Update index',
  generateIndexHint: 'Generate index for search image',
  Model: 'Model',
  Sampler: 'Sampler',
  lora: 'LoRA',
  size: 'Size',
  pos: 'Positive Prompt',
  unknownSavedDir: `Cannot find the saved folder (outdir_save field in the config)`,
  errorOccurred: 'An error occurred',
  useThumbnailPreview: 'Use thumbnail preview',
  smallerIntervalMeansMoreNetworkTraffic: 'Smaller interval means more network traffic',
  gridThumbnailWidth: 'Grid thumbnail width',
  largeGridThumbnailWidth: 'Large grid thumbnail width',
  start: 'Start',
  tip: 'Tip',
  startedAt: 'Started at: ',
  sortByDateAscending: 'Updated date ascending',
  sortByDateDescending: 'UPdated date descending',
  sortByCreatedDateAscending: 'Created date ascending',
  sortByCreatedDateDescending: 'Created date descending',
  sortByNameAscending: 'Name ascending',
  sortByNameDescending: 'Name descending',
  sortBySizeAscending: 'Size ascending',
  sortBySizeDescending: 'Size descending',
  inputAddressAndPressEnter: 'Input address and press Enter',
  go: 'Go',
  unknownError: 'Unknown error',
  loadingNextFolder: 'Loading files from the next folder',
  moveFailedCheckPath: 'Move failed. Check your path input.',
  detailList: 'Detail list',
  previewGrid: 'Preview grid',
  largePreviewGrid: 'Large preview grid',
  sortBy: 'Sort by',
  moveSelectedFilesTo: 'Move selected files to',
  confirm: 'Confirm?',
  download: 'Download',
  local: 'Local',
  sendImageFailed:
    'Failed to send image. Please contact the developer with the error message from the console.',
  confirmDelete: 'Are you sure you want to delete?',
  deleteSuccess: 'Deleted successfully',
  doubleClickToCopy: 'Double-click to copy',
  root: 'Root',
  drive: ' drive',
  refresh: 'Refresh',
  quickMove: 'Quick move',
  more: 'More',
  viewMode: 'View mode',
  sortingMethod: 'Sorting method',
  copyPath: 'Copy path',
  deleteSelected: 'Delete',
  previewInNewWindow: 'Open in new window',
  copySourceFilePreviewLink: 'Copy source file preview link',
  viewGenerationInfo: 'View generation information (prompt, etc.)',
  sendToTxt2img: 'Send to txt2img',
  sendToImg2img: 'Send to img2img',
  sendToInpaint: 'Send to Inpaint',
  sendToExtraFeatures: 'Send to Extra',
  sendToControlNet: 'Send to ControlNet',
  loadNextPage: 'Load next page',
  localFile: 'Local file',
  globalSettings: 'Global settings',
  welcome: 'Welcome',
  openInNewWindow: 'Open in new tab',
  restoreLastRecord: 'Restore last record',
  launch: 'Launch',
  walkMode: 'Use Walk mode to browse images',
  launchFromQuickMove: 'Launch from Quick Move',
  recent: 'Recent',
  emptyStartPage: 'Empty start page',
  t2i: 'txt2img',
  i2i: 'img2img',
  saveButtonSavesTo: 'save',
  extra: 'extras',
  gridImage: 'Grid image',
  'i2i-grid': 'img2img grid',
  image: 'Image',
  't2i-grid': 'txt2img grid',
  workingFolder: 'working folder',
  lang: 'Language',
  langChangeReload: 'Reload: Some changes may require a reload to take effect',
  hypernetworks: 'hypernetworks',
  openOnTheRight: 'Open on the right',
  openInNewTab: 'Open in a new tab',
  openWithWalkMode: 'Open with Walk Mode',
  longPressOpenContextMenu: 'Support long press to open right-click menu',
  searchResults: 'Search Results',
  imgSearch: 'Image Search',
  onlyFoldersAndImages: 'Only show folders and images',
  send2savedDir: 'Send to saved folder'
}

const de: Partial<Record<keyof typeof zh, string>> = {
  //! MissingTranslations: "Markiere fehlende Übersetzungen auf diese Weise"
  serverKeyRequired:
    'Für die weitere Nutzung ist die Eingabe eines Schlüssels erforderlich, der vom Server konfiguriert wurde.',
  removeFromSearchScanPathAndQuickMove: 'Schnellzugriff entfernen',
  addToSearchScanPathAndQuickMove: 'Schnellzugriff hinzufügen',
  openWithLocalFileBrowser: 'Im lokalen Dateimanager öffnen',
  'fuzzy-search-noResults': 'Es wurde nichts gefunden',
  'fuzzy-search-placeholder':
    'Geben Sie einen Teil der Bildinformationen oder des Dateinamens ein, um passende Ergebnisse zu finden',
  'fuzzy-search': 'Schnellsuche',
  autoUpdate: 'Erkannte Änderungen, automatische Aktualisierung wird ausgeführt',
  faq: 'FAQ',
  selectExactMatchTag: 'Wähle Tags für exakte Übereinstimmung aus',
  selectAnyMatchTag: '(Optional) Wähle Tags für beliebige Übereinstimmung aus',
  selectExcludeTag: '(Optional) Wähle Tags zum Ausschliessen aus',
  exactMatch: 'Exakte Übereinstimmung',
  anyMatch: 'Beliebige Übereinstimmung',
  exclude: 'Ausschliessen',
  'auto.refreshed': 'Automatische Aktualisierung erfolgreich durchgeführt!',
  copied: 'In die Zwischenablage kopiert!',
  'index.expired': 'Index abgelaufen, automatische Aktualisierung wird durchgeführt',
  manualExitFullScreen:
    'Du hast das letzte Bild gelöscht und musst möglicherweise manuell den Vollbild-Vorschaumodus beenden',
  long_loading:
    'Ladezeit beträgt mehr als 5 Sekunden. Es könnte sich in Kürze wieder normalisieren. Falls das Problem bestehen bleibt, überprüfen Sie bitte die FAQ für Lösungen oder reichen Sie eine Fehlermeldung ein.',
  'walk-mode-move-message':
    "Im Walk-Modus ist das Verschieben des Verzeichnisses nur über 'Schnellzugriff' gestattet",
  refreshCompleted: 'Aktualisierung erfolgreich abgeschlossen',
  addedTagToImage: 'Schlagwort wurde erfolgreich diesem Bild hinzugefügt',
  removedTagFromImage: 'Schlagwort wurde von diesem Bild entfernt',
  openContextMenu: 'Öffne das Kontextmenü',
  copyPrompt: 'Kopiere Prompt-Konfiguration',
  toggleTag: '(Favorite) Schlagwort hinzufügen/entfernen',
  addComplete: 'Hinzufügen abgeschlossen',
  removeComplete: 'Entfernen abgeschlossen',
  existInOtherType: 'Bereits in anderem Typ vorhanden',
  alreadyExists: 'Bereits vorhanden',
  cancel: 'Abbrechen',
  submit: 'Bestätigen',
  add: 'Hinzufügen',
  custom: 'Benutzerdefiniert',
  needGenerateIdx:
    'Klicken Sie auf die Schaltfläche, um einen Index zur Bildersuche zu generieren. \n Dieser Vorgang kann einige Minuten in Anspruch nehmen.',
  search: 'Suchen',
  UpdateIndex: 'Index aktualisieren',
  generateIndexHint: 'Index für die Bildersuche generieren',
  Model: 'Modell',
  Sampler: 'Sampler',
  lora: 'LoRA',
  size: 'Grösse',
  pos: 'Positiver Prompt',
  unknownSavedDir:
    'Das Speicherverzeichnis konnte nicht gefunden werden (Einstellung für das Speicherverzeichnis in der Konfiguration)',
  errorOccurred: 'Ein Fehler ist aufgetreten',
  useThumbnailPreview: 'Verwende Miniaturansichtsvorschau',
  smallerIntervalMeansMoreNetworkTraffic: 'Kürzeres Intervall bedeutet erhöhten Netzwerkverkehr',
  gridThumbnailWidth: 'Breite der Miniatur-Rasteransicht',
  largeGridThumbnailWidth: 'Breite der grossen Miniatur-Rasteransicht',
  start: 'Start',
  tip: 'Hinweis',
  startedAt: 'Startzeit:' + ' ',
  sortByDateAscending: 'Datum aufsteigend',
  sortByDateDescending: 'Datum absteigend',
  sortByCreatedDateAscending: 'Erstellungsdatum aufsteigend',
  sortByCreatedDateDescending: 'Erstellungsdatum absteigend',
  sortByNameAscending: 'Name aufsteigend',
  sortByNameDescending: 'Name absteigend',
  sortBySizeAscending: 'Grösse aufsteigend',
  sortBySizeDescending: 'Grösse absteigend',
  inputAddressAndPressEnter: 'Geben Sie die Adresse ein und drücken Sie Enter',
  go: 'Los',
  unknownError: 'Unbekannter Fehler aufgetreten',
  loadingNextFolder: 'Lade Dateien aus dem nächsten Verzeichnis',
  moveFailedCheckPath: 'Fehler beim Verschieben. Überprüfen Sie den eingegebenen Pfad.\n',
  detailList: 'Detailübersicht',
  previewGrid: 'Vorschau-Rasteransicht',
  largePreviewGrid: 'Grosses Vorschau-Rasteransicht',
  sortBy: 'Sortieren nach',
  moveSelectedFilesTo: 'Ausgewählte Dateien verschieben nach',
  confirm: 'Bestätigen?',
  download: 'Herunterladen',
  local: 'Lokal',
  sendImageFailed:
    'Fehler beim Senden des Bildes. Bitte kontaktieren Sie den Entwickler mit der Fehlermeldung aus der Konsole.',
  confirmDelete: 'Sind Sie sicher, dass Sie dies löschen möchten?',
  deleteSuccess: 'Erfolgreich gelöscht',
  doubleClickToCopy: 'Doppelklick zum Kopieren',
  root: 'Root',
  drive: ' Laufwerk',
  refresh: 'Aktualisieren',
  quickMove: 'Schnellzugriff',
  more: 'Mehr',
  viewMode: 'Ansichtsmodus',
  sortingMethod: 'Sortiermethode',
  copyPath: 'Pfad kopieren',
  deleteSelected: 'Löschen',
  previewInNewWindow: 'In neuem Fenster öffnen',
  copySourceFilePreviewLink: 'Kopiere Dateilink aus dem Verzeichnis',
  viewGenerationInfo: 'Anzeige von Generierungsinformationen (Prompt, etc.)',
  sendToTxt2img: 'Senden an Text-zu-Bild',
  sendToImg2img: 'Senden an Bild-zu-Bild',
  sendToInpaint: 'Senden an Inpaint',
  sendToExtraFeatures: 'Senden an Extras',
  sendToControlNet: 'Senden an ControlNet',
  loadNextPage: 'Nächste Seite laden',
  localFile: 'Lokale Datei',
  globalSettings: 'Globale Einstellungen',
  welcome: 'Willkommen',
  openInNewWindow: 'In neuem Fenster öffnen',
  restoreLastRecord: 'Letztes Verzeichnis wiederherstellen',
  launch: 'Ausführen',
  walkMode: 'Verwende den Walk-Modus, um Bilder zu durchsuchen',
  launchFromQuickMove: 'Ausführen aus Schnellzugriff',
  recent: 'Kürzlich',
  emptyStartPage: 'Leere Startseite',
  t2i: 'Text-zu-Bild',
  i2i: 'Bild-zu-Bild',
  saveButtonSavesTo: 'Speichern',
  extra: 'Extras',
  gridImage: 'Rasterbild',
  'i2i-grid': 'Bild-zu-Bild Raster',
  image: 'Bild',
  't2i-grid': 'Text-zu-Bild Raster',
  workingFolder: 'Arbeitsordner',
  lang: 'Sprache',
  langChangeReload: 'Neuladen: Einige Änderungen erfordern ein Neuladen, um wirksam zu werden',
  hypernetworks: 'Hypernetzwerke',
  openOnTheRight: 'Rechts öffnen',
  openInNewTab: 'In neuem Tab öffnen',
  openWithWalkMode: 'Im Walk-Modus öffnen',
  longPressOpenContextMenu: 'Langes Rechtsklicken zur Öffnung des Kontextmenüs unterstützen',
  searchResults: 'Suchergebnisse',
  imgSearch: 'Bildsuche',
  onlyFoldersAndImages: 'Nur Ordner und Bilder anzeigen',
  send2savedDir: 'In den gespeicherten Ordner senden'
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $t(key: keyof typeof zh, ...args: []): string
  }
}

export const getPreferredLang = () => {
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('zh')) {
    return 'zh'
  }
  switch (lang) {
    case 'de':
    case 'de-de':
      return 'de'
    default:
      return 'en'
  }
}

export const i18n = createI18n({
  locale: getPreferredLang(),
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
    de
  },
  legacy: false
})

export const { t, locale } = i18n.global
