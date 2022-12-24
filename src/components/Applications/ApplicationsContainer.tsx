import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Application, Applications } from './Applications.types';
import ApplicationsItem from './ApplicationsItem';

const ApplicationsCard = () => {
  const [ applications, setApplications ] = React.useState<Applications>({})
  
  const addApplication = () => {
    const newApplication = {
      id: uuidv4(),
      name: 'Name',
      company: 'Company',
      notes: 'Notes',
      createdAt: new Date(),
    }
    setApplications({...applications, [newApplication.id]: newApplication})
  }
  
  const updateApplication = (application: Application) => {
    setApplications({...applications, [application.id]: application});
  }

  const deleteApplication = (id: string) => {
    const tempApplications = { ...applications };
    delete tempApplications[id];
    setApplications({...tempApplications});
  }

  const loadStorage = async () => {
    const storage = chrome.storage
    storage.sync.get(["applications"]).then((result: any) => {
        setApplications({...result.applications})
    });
  }

  React.useEffect(() => {
    if(Object.keys(applications).length >= 1 && chrome.storage != null){
      chrome.storage.sync.set({ applications: applications })
    }
  }, [ applications ])

  React.useEffect(() => {
    if(chrome.storage != null){
      loadStorage()
    }
  }, [])
  
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, height: '250px', overflowY: 'scroll' }}>
        {
          Object.keys(applications).map((application: string) => <ApplicationsItem application={applications[application]} updateApplication={updateApplication} deleteApplication={deleteApplication} />)
        }
      </ul>
      <div style={{marginLeft: '15px', display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
        <button style={{ borderRadius: '50%', backgroundColor: 'white', color: 'black' }} onClick={() => addApplication()}>+</button>
      </div>
    </div>
  )
}

export default ApplicationsCard