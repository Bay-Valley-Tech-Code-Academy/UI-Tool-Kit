import Header from './Header'

// Templates create a new instance for each of their children on navigation.
export default function Template({ children }) {
    return (
        <>
        <Header />
        <div>{children}</div>
        </>
    )
  }