export default function Test({queryParam}) {
    let name = queryParam

    return (
        <>
            <h1> Hello {name}</h1>
            <style jsx>
                {`
                
                 h1 {
                    color: green;
                    text-align: center;
                 }
                
                `}
            </style>
        </>
    )
}

export function getServerSideProps({query}) {
    let queryParam = query.name

    return {
        props: {
            queryParam,
        }
    }
}