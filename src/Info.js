function formatList(items) {
  if (!items || items.length === 0) return "No Information Provided";
  return (
    items
      .slice(0, 3)
      .map((item) =>
        item
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )
      .join(", ") + (items.length > 3 ? "..." : "")
  );
}

export default function Info({ data }) {
  return data && data.docs && data.docs.length > 0 ? (
    <ul>
      <li>
        <strong>Author:</strong> {data.docs[0].author_name[0]}
      </li>
      <li>
        <strong>Title:</strong> {data.docs[0].title}
      </li>
      <li>
        <strong>Setting:</strong> {formatList(data.docs[0].place)}{" "}
      </li>
      <li>
        <strong>Time:</strong> {formatList(data.docs[0].time)}{" "}
      </li>
      <li>
        <strong>Subjects:</strong> {formatList(data.docs[0].subject)}
      </li>
      <li>
        <strong>Average Rating:</strong> {data.docs[0].ratings_average}{" "}
      </li>
    </ul>
  ) : (
    <p>No data yet</p>
  );
}
