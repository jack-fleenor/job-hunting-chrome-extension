import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Lead, Leads } from './Leads.types';
import LeadsItem from './LeadsItem';

const LeadsContainer = () => {
  const [ leads, setLeads ] = React.useState<Leads>({})
  
  const addLead = () => {
    const newLead = {
      id: uuidv4(),
      name: 'Name',
      company: 'Company',
      notes: 'Notes',
      createdAt: new Date(),
    }
    setLeads({...leads, [newLead.id]: newLead})
  }
  
  const updateLead = (lead: Lead) => {
    setLeads({...leads, [lead.id]: lead});
  }

  const deleteLead = (id: string) => {
    const tempLeads = { ...leads };
    delete tempLeads[id];
    setLeads({...tempLeads});
  }

  const loadStorage = async () => {
    const storage = chrome.storage
    storage.sync.get(["leads"]).then((result: any) => {
        setLeads({...result.leads})
    });
  }

  React.useEffect(() => {
    if(Object.keys(leads).length >= 1 && chrome.storage != null){
      chrome.storage.sync.set({ leads: leads })
    }
  }, [ leads ])

  React.useEffect(() => {
    if(chrome.storage != null){
      loadStorage()
    }
  }, [])
  
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, height: '250px', overflowY: 'scroll' }}>
        {
          Object.keys(leads).map((lead: string) => <LeadsItem lead={leads[lead]} updateLead={updateLead} deleteLead={deleteLead} />)
        }
      </ul>
      <div style={{marginLeft: '15px', display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
        <button style={{ borderRadius: '50%', backgroundColor: 'white', color: 'black' }} onClick={() => addLead()}>+</button>
      </div>
    </div>
  )
}

export default LeadsContainer