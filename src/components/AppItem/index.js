// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props

  return (
    <li key={appItem.appId}>
      <div className="css-appimage-name-container">
        <img
          src={appItem.imageUrl}
          alt={appItem.appName}
          className="css-appImage-itself"
        />
        <p>{appItem.appName}</p>
      </div>
    </li>
  )
}

export default AppItem
