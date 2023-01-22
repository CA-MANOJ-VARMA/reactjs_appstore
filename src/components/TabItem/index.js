// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, activeTab, onclickFunction} = props

  const clickTabItemFunction = changedId => {
    onclickFunction(changedId)
  }

  return (
    <li key={tabItem.id}>
      <button
        type="button"
        className={`css-tab-button-itself ${
          tabItem.tabId !== activeTab ? 'css-blur-tab' : 'css-active-tab'
        }`}
        onClick={() => clickTabItemFunction(tabItem.tabId)}
      >
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
