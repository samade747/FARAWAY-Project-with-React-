export const BottomButtons = () => {
    return (
        <div>
            <button style={{
                backgroundColor: "#fde7aa"
            }}>Sort</button>
            <button onClick={clearAllItems} style={{ backgroundColor: "#fde7aa" }}>Clear List</button>
        </div>
    )
}