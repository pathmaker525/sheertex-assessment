import { useState, useEffect } from 'react';
// import axios from 'axios'

import Layout from "components/Layout";
import CommonFollowerCard from 'components/CommonFollowerCard';

import { getFollowerUrlOf } from 'utils';

const App = () => {
  const [commonUsers, setCommonUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    // axios
    //   .all([
    //     axios.get(getFollowerUrlOf("tumiduong")),
    //     axios.get(getFollowerUrlOf("mildlywilde"))
    //   ])
    //   .then(axios.spread((userDataOne, userDataTwo) => {
    //     const {data: followerListOne} = userDataOne
    //     const {data: followerListTwo} = userDataTwo

    //     const commonData = followerListOne.filter((item) => {
    //       const userId = item.id
    //       let isIdInCommon = false

    //       followerListTwo.map((item) => {
    //         if (item.id === userId) {
    //           isIdInCommon = true
    //         }
    //       })

    //       return isIdInCommon
    //     })

    //     setCommonUsers(commonData) 
    //     setIsLoading(false)
    //   }))
    //   .catch((error) => {
    //     console.log({error});
    //     setCommonUsers([])
    //     setIsLoading(false)
    //   })

    Promise.allSettled(([
      getFollowerUrlOf('tumiduong'),
      getFollowerUrlOf('mildlywilde')
    ]))
    .then((results) => {
      const {value: followerListOne} = results[0]
      const {value: followerListTwo} = results[1]

      const commonData = followerListOne?.filter((item) => {
        const userId = item.id
        let isIdInCommon = false

        followerListTwo?.map((item) => {
          if (item.id === userId) {
            isIdInCommon = true
          }
        })

        return isIdInCommon
      })

      commonData !== undefined && setCommonUsers(commonData)
      setIsLoading(false)
    })
    .catch((error) => {
      console.log({error})
      setCommonUsers([])
      setIsLoading(false)
    })

  }, [])

  return (
    <Layout>
      {isLoading ? <div>Loading...</div> : commonUsers.length === 0 && <div>They have no followers in common</div>}
      {commonUsers?.map((user, index) => <CommonFollowerCard key={index} data={user} />)}
    </Layout>
  );
}

export default App;
