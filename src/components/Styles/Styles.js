const styles = {
    container2: {
        display: 'grid',
        gridTemplateColumns: '0.2fr 0.8fr',
        width: '100%',
        height: '100vh'
    },
    header: {
         backgroundColor: 'yellow',
         width: '100%',
         height: '100vh', 
         border: '2px solid red'
    },
    main: {
        backgroundColor: 'pink',
        width: '100%',
        height: '100vh'
    },
    row: {
        fontSize: '0.8em',
        boxSizing: 'border-box',
        width: '100%',
        margin: '0 auto',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        
    },
    grid: {
        display: 'grid', 
        gridTemplateColumns: '15px 3fr 10px 1fr 15px',
    },
    mainColumn: {
        gridColumnStart: '2',
    },
    rightColumn: {
        gridColumnStart: '4',
        gridRowStart: '1'
    }
    
}   

export default styles