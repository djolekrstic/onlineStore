import { useState } from "react";
import { Heading } from "../components";
import { nanoid } from "nanoid";

const SingleProductInfo = ({
  description,
  name,
  genres,
  released,
  platforms,
  rating,
  reddit_url,
  developers,
  publishers,
}) => {
  const [information, setInformation] = useState(false);

  const descriptionList = description
    .split("<p>")
    .join("")
    .split("</p>")
    .join("")
    .split("<br />");

  const tableContent = [
    "Name",
    "Genres",
    "Released",
    "Platform",
    "Rating",
    "Reddit_url",
    "Developers",
    "Publishers",
  ];

  const genresString = genres
    .map((genre) => {
      return genre.name;
    })
    .join(", ");

  const platformString = platforms
    .map((platform, index) => {
      if (index < 6) {
        return platform.platform.name;
      }
    })
    .filter((item) => item != undefined)
    .join(", ");

  const developersString = developers
    .map((developer) => {
      return developer.name;
    })
    .join(", ");

  const publishersString = publishers
    .map((publisher) => {
      return publisher.name;
    })
    .join(", ");

  const tableInfo = [
    name,
    genresString,
    released,
    platformString,
    rating,
    reddit_url,
    developersString,
    publishersString,
  ];

  return (
    <section className="margin-top singleProductInfo">
      <div className="singleProductInfo-headings">
        <button
          onClick={() => setInformation(false)}
          style={
            information
              ? {}
              : {
                  borderBottom: "3px solid var(--color-neutral)",
                  fontSize: "var(--text-md)",
                }
          }
        >
          <Heading content="Description" />
        </button>
        <button
          onClick={() => setInformation(true)}
          style={
            information
              ? {
                  borderBottom: "3px solid var(--color-neutral)",
                  fontSize: "var(--text-md)",
                }
              : {}
          }
        >
          <Heading content="Information" />
        </button>
      </div>
      <div className="singleProductInfo-description">
        {information ? (
          <table>
            <thead>
              <tr>
                {tableContent.map((item) => (
                  <th key={nanoid()}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {tableInfo.map((item) => {
                  if (item != false) {
                    return <td key={nanoid()}>{item}</td>;
                  } else {
                    return <td key={nanoid()}>N/A</td>;
                  }
                })}
              </tr>
            </tbody>
          </table>
        ) : (
          <ul>
            {descriptionList.map((item) => {
              return (
                <li>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};
export default SingleProductInfo;
