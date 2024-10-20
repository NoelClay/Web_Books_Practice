import logo from "./logo.svg";
import "./App.css";

function App() {
  const topics = [ //리스트 타입으로 감싸고
    //각 요소는 오브젝트 타입으로
    {id: 1, title:'html', body:'html is...'},{id: 2, title:'css', body:'css is...'},{id: 3, title:'JS', body:'JS is...'}
  ]

  return (
    <div>
      <Header titletitle="REACT"></Header>
      <Nav topic={topics}></Nav>
      <Article title ="Welcome" body="Hello, Web"></Article>
      <Article title ="Hi" body="Hello, React"></Article>
    </div>
  );
}

function Header(props11) {
  console.log("프로퍼티즈는", props11);
  console.log("타이틀은", props11.titletitle);
  return (
    <header>
      <h1>
        <a href="/">{props11.titletitle}</a>
      </h1>
    </header>
  )
}

function Nav(props){
  const lis =[]
  for(let i=0; i<props.topic.length; i++){
    let temp = props.topic[i];
    lis.push(<li key={temp.id}><a href={'/read/' + temp.id}>{temp.title}</a> {temp.body}</li>);
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
