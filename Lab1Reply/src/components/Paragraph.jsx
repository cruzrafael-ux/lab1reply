export default function Paragraph(props) {
    return (
        <section>
            <h2>
                {props.title}
            </h2>
            <p>{props.content}</p>
        </section>
    );
}