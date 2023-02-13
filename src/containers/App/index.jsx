import { useState, useEffect } from 'react';
import axios from 'axios'

import Layout from "components/Layout";
import CommonFollowerCard from 'components/CommonFollowerCard';

import { getFollowerUrlOf } from 'utils';

const App = () => {
  const [commonUsers, setCommonUsers] = useState([])

  useEffect(() => {
    axios
      .all([
        axios.get(getFollowerUrlOf("tumiduong")),
        axios.get(getFollowerUrlOf("mildlywilde"))
      ])
      .then(axios.spread((userDataOne, userDataTwo) => {
        const {data: followerListOne} = userDataOne
        const {data: followerListTwo} = userDataTwo

        const commonData = followerListOne.filter((item) => {
          const userId = item.id
          let isIdInCommon = false

          followerListTwo.map((item) => {
            if (item.id === userId) {
              isIdInCommon = true
            }
          })

          return isIdInCommon
        })

        console.log({commonData});

        setCommonUsers(commonData) 
      }))
      .catch((error) => {
        console.log({error});
        setCommonUsers([])
      })
  }, [])

  return (
    <Layout>
      {commonUsers?.map((user, index) => <CommonFollowerCard key={index} data={user} />)}
    </Layout>
  );
}

export default App;
