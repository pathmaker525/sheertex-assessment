const Layout = (props) => {
  const { children } = props

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: "column",
        padding: 8
      }}
    >
      <h1
        style={{ 
          fontSize: 24,
          fontWeight: 'bold'
        }}
      >
        SheerTex Assessment: getting common follower between tumiduong and mildywilde :D
      </h1>
      <hr />
      <div>
        <div>Common Followers following:</div>
        {children}
      </div>
    </div>
  )
}

export default Layout