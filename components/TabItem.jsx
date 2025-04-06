export const TabItem = ({ title, index, active, setActive }) => {
    const activeStyle = active ? { borderBottom: '2px solid black' } : {};

    return (
        <div className="nav-item px-10 pt-10">
            <button onClick={() => setActive(title)} className={`pt-3 pb-2`}>
                <span style={{ fontSize: '1.5rem', padding: '0.5rem', ...activeStyle }}> 
                    {title.toUpperCase()}
                </span>
            </button>
        </div>
    )
}
