import {postsRef} from '../../components/database';

export default async (req, res) => {
  const array = [];
  postsRef.once("value", snapshot => {
    snapshot.forEach(childSnapshot => {
      array.push(childSnapshot.val())
    })
    return res.json({posts: array })
  })
};
  