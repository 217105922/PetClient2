
import '../App.css';
import DetailArticle from '../detailarticle'
import TableDemo from "./TableDemo";
import UserContext from '../contexts/user';
import React, { useContext } from 'react';
// import { status, json } from '/utilities/requestHandlers';
// import SearchUser from './userSearch'
// import ImageUpload from './ImageUpload'
// import { Row, Col, Space } from 'antd';
// import { Avatar, Image } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
function Dashboard() {




    const user = useContext(UserContext);

  return (
    <UserContext.Consumer>

      {({ logout, user }) => (
       <>
               {user.role == "staff" && <TableDemo authbasic={btoa(`${user.username}:${user.password}`)} />}   
                 {user.role == "admin" && <TableDemo authbasic={btoa(`${user.username}:${user.password}`)} />}  
 
       </>

      )}
    </UserContext.Consumer>

    
  )


     


    

      
}

export default Dashboard;