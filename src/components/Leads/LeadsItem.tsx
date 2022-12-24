import { Lead } from './Leads.types';
import LeadsCard from './LeadsCard';

const LeadsItem = (props: { lead: Lead, updateLead: Function, deleteLead: Function }) => {
  const { lead, updateLead, deleteLead } = props;

  return <li style={{ border: '1px solid white', padding: 0, marginBottom: '10px', borderRadius: '5px'}}>
    <LeadsCard lead={lead} updateLead={updateLead} deleteLead={deleteLead} />
  </li>
};

export default LeadsItem;