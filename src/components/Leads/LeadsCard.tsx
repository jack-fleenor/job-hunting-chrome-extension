import React from 'react'
import menuOpen from "../../assets/menuOpen.png";
import menuClose from "../../assets/menuClose.png";
import save from "../../assets/save.png";
import remove from "../../assets/remove.png";
import pencil from "../../assets/pencil.png";
import IconButton from '../Shared/IconButton';

const LeadsCard = (props: any) => {
  const { lead, updateLead, deleteLead } = props;
  const { name, company, notes } = lead;
  const [ edit, setEdit ] = React.useState(false);
  const [ openMenu, setOpenMenu ] = React.useState(false);
  const [ editedLead, setEditedLead ] = React.useState(lead);
  
  const handleFormChange = (key: string, value: string) => { 
    setEditedLead({ ...editedLead, [key]: value })
  };

  const handleMenuButtonClick = () => {
    setOpenMenu(!openMenu);
    if(openMenu){
      setEdit(false);
    }
  }

  const handleEditButtonClick = () => {
    setEdit(!edit);
  }

  const handleSaveButtonClick = () => {
    setOpenMenu(!openMenu);
    updateLead(editedLead);
    setEdit(!edit);
  }

  const handleDeleteButtonClick = () => {
    setOpenMenu(!openMenu);
    deleteLead(lead.id);
    setEdit(!edit);
  }

  return (
    <div className="lead" style={{ display: 'flex', padding: '0.5em' }}>
      <div className="container" style={{ width: '90%' }}>
        <div style={{ textAlign: 'left' }}>
          <div> 
            { edit ? <input
              style={{width: '95%'}} 
              type="text" 
              value={editedLead.name} 
              onChange={(e) => handleFormChange('name', e.target.value)} 
            /> : name }
          </div>
          <div>
            { edit ? <input
              style={{width: '95%'}}
              type="text" 
              value={editedLead.company} 
              onChange={(e) => handleFormChange('company', e.target.value)}  
            /> : company }
          </div>
          <div>
            { edit ? <textarea 
              style={{width: '95%'}}
              name="notes" 
              onChange={(e) => handleFormChange('notes', e.target.value)} 
              value={editedLead.notes} 
              rows={5} 
            /> : notes }
          </div>
        </div>
      </div>
      <div className="actions" style={{width: '5%'}}>
        { openMenu ? <div style={{display: 'flex', flexDirection: 'column'}}>
            <IconButton buttonFunction={handleMenuButtonClick} icon={menuClose} alt="Open Menu Icon" />
            { edit ? <IconButton buttonFunction={handleSaveButtonClick} icon={save} alt="Save Icon" /> : null }
            { edit ? <IconButton buttonFunction={handleDeleteButtonClick} icon={remove} alt="Remove Icon" /> : null }
            { edit ? null : <IconButton buttonFunction={handleEditButtonClick} icon={pencil} alt="Pencil Icon" /> }
          </div> : <div style={{display: 'flex', flexDirection: 'column'}}>
            <IconButton buttonFunction={handleMenuButtonClick} icon={menuOpen} alt="Close Menu Icon" />
        </div> }
      </div>
    </div>
  )
}

export default LeadsCard;