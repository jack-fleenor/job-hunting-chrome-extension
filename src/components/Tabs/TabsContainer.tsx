import React from 'react'
import LeadsContainer from '../Leads/LeadsContainer';
import ApplicationsContainer from '../Applications/ApplicationsContainer';
import icon from "../../assets/icon.png";

const TabsContainer = () => {
  const [ currentTab, setCurrentTab ] = React.useState<string | null>(null);
  
  const tabs: { [ key: string ]: React.ReactElement } = {
    ['Leads']: <LeadsContainer />,
    ['Applications']: <ApplicationsContainer />
  };
  
  const changeTab = (tab: string) => {
    setCurrentTab(tab)
  };
  
  React.useEffect(() => {
    setCurrentTab('Leads')
  }, []);

  const tabStyles = {
    active: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid black',
      borderRadius: '15px 15px 0px 0px'
    },
    inactive: {
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid black',
      borderRadius: '15px 15px 0px 0px'
    }
  }
  
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={icon} alt="Vite logo" style={{ height: '30px', marginRight: '15px' }} /> 
        <button 
          style={currentTab === 'Leads' ? tabStyles.active : tabStyles.inactive } 
          onClick={() => changeTab('Leads')}
          type="button" 
        >
          Leads
        </button>
        <button 
          style={currentTab === 'Applications' ? tabStyles.active : tabStyles.inactive } 
          onClick={() => changeTab('Applications')}
          type="button" 
        >
          Applications
        </button>
      </div>
      { currentTab != null ? tabs[currentTab] : null }
    </div>
  )

}

export default TabsContainer;