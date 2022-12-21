import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LeadsItem from './LeadsItem';

const LeadsContainer = () => {
  interface Lead {
    name: string;
    company: string;
    notes: string;
    createdAt: Date;
    lastEditedAt: Date;
  }
  
  interface Leads { [index: string]: Lead; }
  
  const [ leads, setLeads ] = React.useState<Leads>({})
  
  const addLead = () => {
    const newLead = {
      id: uuidv4(),
      name: 'Lead',
      company: 'Lead',
      notes: 'Lorem ipsum',
      createdAt: new Date(),
      lastEditedAt: new Date()
    }
    setLeads({...leads, [newLead.id]: newLead})
  }
  
  const updateLead = (lead: any) => {
    leads[lead.id]['lastEditedAt'] = new Date();
    setLeads({...leads, [lead.id]: lead});
  }

  const deleteLead = (id: any) => {
    const tempLeads = { ...leads };
    delete tempLeads[id];
    setLeads({...tempLeads});
  }

  const loadStorage = async () => {
    const storage = chrome.storage
    storage.sync.get(["leads"]).then((result: any) => {
        console.log("Value currently is " + result.leads);
        setLeads({...result.leads})
    });
  }

  React.useEffect(() => {
    if(Object.keys(leads).length >= 1 && chrome.storage != null){
      chrome.storage.sync.set({ leads: leads }).then(() => {
        console.log("Value is set to " + leads);
      });
    }
  }, [ leads ])

  React.useEffect(() => {
    if(chrome.storage != null){
      loadStorage()
    }
  }, [])
  
  return (
    <div>
      <button onClick={() => addLead()}> Add Lead </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {
          Object.keys(leads).map((lead: any) => <LeadsItem lead={leads[lead]} updateLead={updateLead} deleteLead={deleteLead} />)
        }
      </ul>
    </div>
  )
}

export default LeadsContainer