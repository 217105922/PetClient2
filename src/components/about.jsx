
import '../App.css';
import React from 'react';
import { Col, Row } from 'antd';
import PostCard from './postcard';
import { status, json } from '/utilities/requestHandlers';
import { useState, useEffect,useContext } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import UserContext from '../contexts/user';

function About() {

  const [posts, setposts] = useState([]);
  const [userliked, setuserliked] = useState([]);
  
  const user = useContext(UserContext);

  
  useEffect(() => {
    console.log("user");
    console.log(user.user.id);

    fetch('https://petnode.217105922.repl.co/api/v1/dogs/like/'+ user.user.id)
      .then(status)
      .then(json)
      .then(data => {

        for (let i = 0; i < data.length; i++) {
          // setRows(oldArray => [...oldArray, { id: data[i].id, title: data[i].title, alltext: data[i].alltext, summary:     data[i].summary, authorid: 1, imageurl: "../img/dog.jpg" }])
         console.log(data[i].articleid); 
        fetch('https://PetNode.217105922.repl.co/api/v1/dogs/'+data[i].articleid, {
          method: 'Get',
        })
          .then(status)
          .then(json)
          .then(data => {
           setposts(olddata=> data.concat(olddata));
           //  setposts(data);
          })
          .catch(errorResponse => {
            // For you TODO: show nicely formatted error message and clear form
            console.error(errorResponse);
            alert(`Error: Login First`);
          });


          
        }
        



      })
      .catch(err => console.log("Error fetching articles", err));

      console.log(posts); 


  }, []
  )


  const cardList = posts.map(post => {
    return (
      <div style={{ padding: "10px" }} key={post.id} >
        <Col span={6}>

          <PostCard {...post} />


        </Col>
      </div>
    )
  });


  return (
    <>
      <h2 style={{ color: 'green' }}> Welcome to The Canine Shelter</h2>
      <Row type="flex" justify="space-around">
        {cardList}
      </Row>



    </>
  )
}

export default About;
