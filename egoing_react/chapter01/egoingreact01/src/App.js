import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

function App() {

  // const _mode = useState("WELCOME");
  // console.log("_mode", _mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [registerd, setRegistered] = useState(false);

  // let content = {title:null, body:null};
  let content = null;


  const topics = [ //리스트 타입으로 감싸고
    //각 요소는 오브젝트 타입으로
    {id: 1, title:'html', body:'html is...'},{id: 2, title:'css', body:'css is...'},{id: 3, title:'JS', body:'JS is...'},{id:4, title:}
  ]

  if(mode=='WELCOME'){
    content = {title: 'Welcome', body:'Hello, Web'}

  }else if(mode=='READ'){
    // content = {title: 'Read', body:'Read, Web'}
    topics.forEach(element => {
      if(element.id == id){
        content={title:element.title, body:element.body};
      }
    });
  }else if(mode=="CREATE"){
    content = {title:"Create"};
  }

  return (
    <div>
      <Header titletitle="REACT" onChangeMode={function(){
        alert('Header'); setMode('WELCOME');
      }}></Header>
      <Nav topic={topics} onChangeMode={function(internal_id){alert(internal_id); setMode("READ"); setId(internal_id)}}></Nav>
      <Article title ={content.title} body={content.body}></Article>
      <CreateArticle mode={mode} ></CreateArticle>
      {/* <CreateBtn onChangeMode={()=>{setMode("CREATE")}}></CreateBtn> */}
      <a href="/create" onClick={(event)=>{event.preventDefault(); setMode("CREATE")}}>Create</a>
    </div>
  );
}

function CreateArticle(props){
  if(props.mode == "CREATE"){
    return(
      <form onSubmit={(event)=>{setRegistered(true); event.preventDefault(); const title=event.target.title.value; const body=event.target.body.value;}}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><button type="submit">Create</button></p>
      </form>
    )
  }
  else{
    return
  }

}

function CreateBtn(props){
  return(
    <a href="/" onClick={(event)=>{event.preventDefault(); props.onChangeMode();}} > Create </a>
  )
}

function Header(props11) {
  console.log("프로퍼티즈는", props11);
  console.log("타이틀은", props11.titletitle);
  return (
    <header>
      <h1>
        {/* <a href="/" onClick={function(event){
          event.preventDefault();
          props11.onChangeMode();
        }}>{props11.titletitle}</a> */}
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props11.onChangeMode();
        }}>{props11.titletitle}</a>
      </h1>
    </header>
  )
}

function Nav(props){
  const lis =[]
  for(let i=0; i<props.topic.length; i++){
    let temp = props.topic[i];
    lis.push(<li key={temp.id}><a id={temp.id} href={'/read/' + temp.id} onClick={(event)=>{event.preventDefault(); props.onChangeMode(Number(event.target.id));}}>{temp.title}</a> {temp.body}</li>);
  }

  return(
    <nav>
    <ol>
      {/* <li>
        <a href="/read/1">html</a>
      </li>
      <li>
        <a href="/read/2">css</a>
      </li>
      <li>
        <a href="/read/3">js</a>
      </li> */}
      {lis}
    </ol>
  </nav>
  )
}

function Article(props){
  console.log(props);
  return(
    <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  )
}

export default App;
