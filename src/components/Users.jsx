import {
  useEffect
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { fetchUsers } from '../store/userSlice'

const Users = () => {
  const user = useSelector((store) => store.user)
  console.log(user)
  const users = useSelector((store) => store.user.users)
  const loading = useSelector((store) => store.user.loading)
  const error = useSelector((store) => store.user.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    if(error) {
      alert(error)
    }
  }, [error])

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    }}>
      {loading && (
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
      )}
      {users.map(user => (
        <div
          key={user.id}
          style={{
            border: '1px solid white',
            borderRadius: '5px',
            margin: '1em',
            width: '15em'
          }}
        >
          <img 
            src={user.avatar} 
            style={{
              width: '100%'
            }}
          />
          <div style={{
            padding: '1em'
          }}>
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users