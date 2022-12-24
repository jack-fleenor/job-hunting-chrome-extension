import ApplicationCard from './ApplicationCard';
import { Application } from './Applications.types';

const ApplicationsItem = (props: { application: Application, updateApplication: Function, deleteApplication: Function}) => {
  const { application, updateApplication, deleteApplication } = props;

  return <li style={{ border: '1px solid white', padding: 0, marginBottom: '10px', borderRadius: '5px'}}>
    <ApplicationCard application={application} updateApplication={updateApplication} deleteApplication={deleteApplication} />
  </li>
};

export default ApplicationsItem;