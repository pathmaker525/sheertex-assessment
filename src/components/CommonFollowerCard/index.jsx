import { keysIn } from "lodash"

const CommonFollowerCard = (props) => {
  const { data } = props

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: "column",
        border: '1px solid black', 
        borderRadius: 8,
        padding: 8,
      }}
    >
      {
        keysIn(data).map((item, index) => 
          <div key={index} className="flex gap-2">
            <span>{item}</span>
            <span> : </span>
            <span>{data[item]}</span>
          </div>
        )
      }
    </div>
  )
}

export default CommonFollowerCard