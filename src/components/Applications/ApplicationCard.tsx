import React from 'react'
import { Application } from './Applications.types';
import menuOpen from "../../assets/menuOpen.png";
import menuClose from "../../assets/menuClose.png";
import save from "../../assets/save.png";
import remove from "../../assets/remove.png";
import pencil from "../../assets/pencil.png";
import IconButton from '../Shared/IconButton';

const ApplicationsCard = (props: { application: Application, updateApplication: Function, deleteApplication: Function}) => {
  const { application, updateApplication, deleteApplication } = props;
  const { name, company, notes } = application;
  const [ edit, setEdit ] = React.useState<Boolean>(false);
  const [ openMenu, setOpenMenu ] = React.useState<Boolean>(false);
  const [ editedApplication, setEditedApplication ] = React.useState<Application>(application);
  
  const handleFormChange = (key: string, value: string) => { 
    setEditedApplication({ ...editedApplication, [key]: value })
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
    updateApplication(editedApplication);
    setEdit(!edit);
  }

  const handleDeleteButtonClick = () => {
    setOpenMenu(!openMenu);
    deleteApplication(application.id);
    setEdit(!edit);
  }

  return (
    <div className="application" style={{ display: 'flex', padding: '0.5em' }}>
      <div className="container" style={{ width: '90%' }}>
        <div style={{ textAlign: 'left' }}>
          <div> 
            { edit ? <input
              style={{width: '95%'}} 
              type="text" 
              value={editedApplication.name} 
              onChange={(e) => handleFormChange('name', e.target.value)} 
            /> : name }
          </div>
          <div>
            { edit ? <input
              style={{width: '95%'}}
              type="text" 
              value={editedApplication.company} 
              onChange={(e) => handleFormChange('company', e.target.value)}  
            /> : company }
          </div>
          <div>
            { edit ? <textarea 
              style={{width: '95%'}}
              name="notes" 
              onChange={(e) => handleFormChange('notes', e.target.value)} 
              value={editedApplication.notes} 
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

export default ApplicationsCard;