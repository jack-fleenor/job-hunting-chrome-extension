import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LeadsItem from './LeadsItem';
import icon from "../../assets/icon.png";

const LeadsContainer = () => {
  interface Lead {
    name: string;
    company: string;
    notes: string;
    createdAt: Date;
  }
  
  interface Leads { [index: string]: Lead; }
  
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
  
  const updateLead = (lead: any) => {
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
      <div style={{marginLeft: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <img src={icon} alt="Vite logo" style={{height: '25px'}} /> 
        <h3> job leads </h3>
        <button onClick={() => addLead()}> Add Lead </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, height: '250px', overflowY: 'scroll' }}>
        {
          Object.keys(leads).map((lead: any) => <LeadsItem lead={leads[lead]} updateLead={updateLead} deleteLead={deleteLead} />)
        }
      </ul>
      
    </div>
  )
}

export default LeadsContainer