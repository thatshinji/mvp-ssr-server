const Home = () => {
  return (
    <div>
      <h1>hello ssr</h1>
      <button onClick={() => {
        alert('hello ssr')
      }}>alert</button>
    </div>
  )
}

export default Home