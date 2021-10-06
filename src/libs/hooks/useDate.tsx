export const useDate = (time: any) => {
    let date = time.substring(0,10).split('-');
    return (
        <>
            {
                date[0] + '.' + date[1] + '.' + date[2]
            }
        </>
    )
}