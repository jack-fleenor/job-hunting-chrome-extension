import React from 'react'
import menuOpen from "../../assets/menuOpen.png";
import menuClose from "../../assets/menuClose.png";
import save from "../../assets/save.png";
import remove from "../../assets/remove.png";
import pencil from "../../assets/pencil.png";

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
    <div className="lead" style={{display: 'flex', padding: '0.5em'}}>
      <div className="container" style={{width: '80%'}}>
        <div style={{ textAlign: 'left'}}>
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
          { edit ? <div>
              <textarea 
                style={{width: '95%'}}
                name="notes" 
                onChange={(e) => handleFormChange('notes', e.target.value)} 
                value={editedLead.notes} 
                rows={5} 
              /> 
            </div> : notes 
          }
        </div>
      </div>
      <div className="actions" style={{width: '20%'}}>
        {
          openMenu ? <div style={{display: 'flex', flexDirection: 'column'}}>
            <button onClick={() => handleMenuButtonClick()} style={{backgroundColor: 'white', padding: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}}>
              <img src={menuClose} alt="Open Menu Icon" style={{height: '15px', width: '15px'}} />
            </button>
            {
              edit ? <button onClick={() => handleSaveButtonClick()} style={{backgroundColor: 'white', padding: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}}>
              <img src={save} alt="Save Icon" style={{height: '15px', width: '15px'}} />
            </button> : null 
            }
            {
              edit ? <button onClick={() => handleDeleteButtonClick()} style={{backgroundColor: 'white', padding: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}}>
              <img src={remove} alt="Remove Icon" style={{height: '15px', width: '15px'}} />
            </button> : null 
            }
            {
              edit ? null : <button onClick={() => handleEditButtonClick()} style={{backgroundColor: 'white', padding: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}}>
              <img src={pencil} alt="Pencil Icon" style={{height: '15px', width: '15px'}} />
            </button>  
            }
          </div> : <div style={{display: 'flex', flexDirection: 'column'}}>
            <button onClick={() => handleMenuButtonClick()} style={{backgroundColor: 'white', padding: 5, marginBottom: 5, marginLeft: 5, marginRight: 5}}>
              <img src={menuOpen} alt="Close Menu Icon" style={{height: '15px', width: '15px'}} />
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default LeadsCard