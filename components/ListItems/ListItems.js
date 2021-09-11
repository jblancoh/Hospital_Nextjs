import React from 'react';
import Divider from '@material-ui/core/Divider';

import NavItem from '@components/NavItem/NavItem'
import { FaPaperPlane, FaRegPaperPlane, FaSignOutAlt } from 'react-icons/fa';
import { useSession } from 'next-auth/client'

export const MainListItems = (props) => {
  const [session] = useSession()
  return (
    <div>
      {session &&
        <>
          <NavItem to='documentsSent' icon={FaPaperPlane} title="Oficios enviados" active={props.selected["Oficios enviados"]} onCLick={props.onCLick} />
          <NavItem to='documentsReceived' icon={FaRegPaperPlane} title="Oficios recibidos" active={props.selected["Oficios recibidos"]} onCLick={props.onCLick} />
        </>
      }
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center', height: '40px', alignItems: 'center' }}>
        <span style={{ textAlign: 'center', fontSize: 10 }}>CONOFI V1.0</span>
      </div>
    </div>
  )
}