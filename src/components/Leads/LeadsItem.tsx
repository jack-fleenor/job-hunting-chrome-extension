import React from 'react';

const LeadsItem = (props: any) => {
  const { lead, updateLead, deleteLead } = props;
  const { name, company, notes } = lead;
  const [ edit, setEdit ] = React.useState(false);
  const [ editedLead, setEditedLead ] = React.useState(lead);

  const handleFormChange = (key: string, value: string) => { 
    setEditedLead({ ...editedLead, [key]: value })
  };
  
  const handleSave = () => {
    updateLead(editedLead)
    setEdit(false)
  }
  
  const handleDelete = () => {
    deleteLead(lead.id)
  }
  
  const handleEdit = () => {
    setEdit(!edit)
  }

  return <li style={{ border: '1px solid white' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ textAlign: 'left', display: 'block' }}>
        <h3 style={{ margin: 0 }}>
          <b>
            { edit ? <input 
              type="text" 
              value={editedLead.name} 
              onChange={(e) => handleFormChange('name', e.target.value)} 
            /> : name }
          </b>
        </h3>
        <i>
          { edit ? <input 
            type="text" 
            value={editedLead.company} 
            onChange={(e) => handleFormChange('company', e.target.value)}  
          /> : company }
        </i>
      </div>
      <div style={{alignItems: 'right'}}>
        { edit ? <button onClick={() => handleSave()} style={{padding: 0}}>💾</button> : null }
        <button onClick={() => handleDelete()} style={{padding: 0}}>🗑️</button>
        <button onClick={() => handleEdit()} style={{padding: 0}}>
          { edit ? "✖️" : "✏️" }
        </button>
      </div>
    </div>
    <div>
      <div style={{width: '100%', textAlign: 'left'}}>
        { edit ? 
          <textarea name="notes" onChange={(e) => handleFormChange('notes', e.target.value)} value={editedLead.notes} rows={5} /> 
          : notes 
        }
      </div>
    </div>
  </li>
};

export default LeadsItem;