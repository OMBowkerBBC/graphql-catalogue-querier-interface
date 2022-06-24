import { useContext } from 'react'
import { FetchedJsonContext } from './contexts/FetchedJsonContext'
import UserSelectionPanel from './components/UserSelectionPanel'
import NavigationHeader from '@bbc/igm-navigation-header'
import ReactJson from 'react-json-view'
import '@bbc/igm-navigation-header/dist/NavigationHeader.css'
import './app.css'


const NavigationLink = (href, content) => (
  <a href={href} className='igm-navigation-header-1jrdvj7' key={content}> 
    <span>{content}</span>
  </a>
)

function App() {
  const { json, setJson } = useContext(FetchedJsonContext)

  return (
    <div className="App">
      <NavigationHeader
        leftChildren={[NavigationLink('#', 'Home'), NavigationLink('#', 'About')]}
        showBlocks={true}
        rightChildren={[]}
      />

      <div className='content-wrapper'>

        <UserSelectionPanel setJson={setJson} />

        <div className='right-panel'>
          <ReactJson src={json} />
        </div>
      </div>
    </div>
  )
}

export default App
