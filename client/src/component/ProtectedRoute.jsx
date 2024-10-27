
import { Navigate } from 'react-router-dom'
export default function ProtectedRoute({ loggedin, children }) {
  console.log(loggedin);
  if (loggedin) {
    return children
  }
  else {
    return <Navigate to="/login" />
  }
}
