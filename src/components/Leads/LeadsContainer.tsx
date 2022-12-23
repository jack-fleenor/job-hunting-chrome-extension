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

  const handleSearch = (search: any) => {

  };

  React.useEffect(() => {
    if(chrome.storage != null){
      loadStorage()
    }
  }, [])
  
  return (
    <div>
      <div style={{display: 'flex'}}>
        <img src={icon} alt="Vite logo" style={{height: '25px'}} />
        <div style={{marginLeft: '15px'}}>
          job leads
        </div>
      </div>
      {/* <input onChange={(e) => handleSearch(e.target.value)} className="search" type="text" placeholder="search"/> */}
      <ul style={{ listStyleType: 'none', padding: 0, height: '250px', overflowY: 'scroll' }}>
        {
          Object.keys(leads).map((lead: any) => <LeadsItem lead={leads[lead]} updateLead={updateLead} deleteLead={deleteLead} />)
        }
      </ul>
      <button onClick={() => addLead()}> Add Lead </button>
    </div>
  )
}

export default LeadsContainer