import React from 'react';
import { Col, Row } from 'antd';
import PostCard from './postcard';
import { status, json } from '/utilities/requestHandlers';
import { useState, useEffect } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function BlogGrid(props) {
  const [posts, setposts] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title"]);
  const [Allposts,setAllposts] = useState([]);

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



  useEffect(() => {

    console.log('component mounted!')
    fetch('https://petnode.217105922.repl.co/api/v1/dogs')
      .then(status)
      .then(json)
      .then(data => {
        // this.setState({ posts: data })
       setposts(data)
       setAllposts(data)

      // setposts(posts.filter(posts=>
      //     posts.toLowerCase().includes(q)))

        
        //   console.log("post ", data)
      })
      .catch(err => console.log("Error fetching articles", err));
  }, [])

  


  function handleChange(event) {
    setQ(event.target.value)

  }






  

  const cardList = posts.filter(post=>post.title.includes(q)).map(post => {
    return (
      <div style={{ padding: "10px" }} key={post.id} >
        <Col span={6}>

          <PostCard {...post} />


        </Col>
      </div>
    )
  });

 const menuItems = [...new Set(posts.map((Val) => Val.title))];



  


  
  return (
    <>



     <div className="d-flex justify-content-center">
        {menuItems.map((Val, title) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              key={title}
              onClick={()=>setposts(posts.filter(post=>post.title.includes(Val)))}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setposts(Allposts)}
        >
          All
        </button>
       </div>




     <MDBCol md="6">
      <MDBFormInline className="md-form"> <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"  
          id="search-form"  
          name="search-form"  
          value={q}
          onChange={handleChange} />
      </MDBFormInline>
    </MDBCol>

      

    

      <Row type="flex" justify="space-around">
        {cardList}
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

      // <input
      //   type="search"
      //   name="search-form"
      //   id="search-form"
      //   className="search-input"
      //   placeholder="Search for..."
      //   value={q}
      //   onChange={handleChange}
      // />

export default BlogGrid;
