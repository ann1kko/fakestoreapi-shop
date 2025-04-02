export default function Products({ params }: { params: { id: string } }) {
    return <section>{params.id}</section>
}
