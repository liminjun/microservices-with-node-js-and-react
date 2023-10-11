import Link from 'next/link';
export default ({ currentUser }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" href="/">Simple Blog.</Link>
            <div className="d-flex justify-content-end">

            </div>

        </nav>
    )
}