  import React from 'react';
import { Col, Row } from 'antd';
import PostCard from './postcard';
import { status, json } from '/utilities/requestHandlers';
import {useState,useEffect} from 'react';


function BlogGrid(props) {
  const [posts,setposts] = useState([]);

//     const componentDidMount = ()=>{
      
 //   fetch('https://petnode.217105922.repl.co/api/v1/dogs')
 //  .then(status)
 //  .then(json)
 //  .then(data => {
 //    // this.setState({ posts: data })
 //    setposts(data)
 // //   console.log("post ", data)
 //  })
 //  .catch(err => console.log("Error fetching articles", err));


// }

  useEffect(()=>{
    
  console.log('component mounted!')
  fetch('https://petnode.217105922.repl.co/api/v1/dogs')
  .then(status)
  .then(json)
  .then(data => {
    // this.setState({ posts: data })
    setposts(data)
 //   console.log("post ", data)
  })
  .catch(err => console.log("Error fetching articles", err));
},[])


      
    const cardList = posts.map(post => {
      return (
        <div style={{padding:"10px"}} key={post.id} >
          <Col span={6}>
 
            <PostCard {...post} />  
            

          </Col>          
         </div>
      )
    });
    return (
   <>
      <input type= "text" placeholder="Search..." />
      <Row type="flex" justify="space-around">
        {cardList  }
      </Row>
     </>
    );
}





// class BlogGrid extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     }
//   }

//   componentDidMount() {
  // fetch('https://petnode.217105922.repl.co/api/v1/dogs')
  // .then(status)
  // .then(json)
  // .then(data => {
//     this.setState({ posts: data })
  
//  //   console.log("post ", data)
//   })
//   .catch(err => console.log("Error fetching articles", err));


// }



//   render() {
    
  
  //   if (!this.state.posts.length) {
  //     return <h3>Loading posts...</h3>
  //   }
  //   // the next line does the Array.map() operation on the posts
  //   // to create an array of React elements to be rendered
   //  const cardList = this.state.posts.map(post => {
   //    return (
   //      <div style={{padding:"10px"}} key={post.id} >
   //        <Col span={6}>
 
   //          <PostCard {...post} />  
            

   //        </Col>          
   //       </div>
   //    )
   //  });
   //  return (
   // <>
   //    <input type= "text" placeholder="Search..." onChange={(event)=>{
   //      this.setState({ searchTerm: event.target.value })
   //    }}
   //      />
      
   //    <Row type="flex" justify="space-around">
   //      {cardList  }
   //    </Row>
   //   </>
   //  );
  // }
// }

 export default BlogGrid;
