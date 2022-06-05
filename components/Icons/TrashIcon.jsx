import * as React from "react";

const SvgComponent = (props) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      className="trash dropzone"
      style={{
        fill: "#cfcdd2",
      }}
      d="M338.824 135.529H173.176V82.824C173.176 37.155 210.331 0 256 0s82.824 37.155 82.824 82.824v52.705zM218.353 90.353h75.294v-7.529c0-20.759-16.888-37.647-37.647-37.647s-37.647 16.888-37.647 37.647v7.529z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#aeadb3",
      }}
      d="M256 0v45.176c20.759 0 37.647 16.888 37.647 37.647v7.529H256v45.176h82.824V82.824C338.824 37.155 301.669 0 256 0z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#cfcdd2",
      }}
      d="M451.765 165.647H60.235L90.353 512h331.294z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#aeadb3",
      }}
      d="M256 165.647V512h165.647l30.118-346.353z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#dfdfe1",
      }}
      d="M391.529 90.353H120.471c-49.9 0-90.353 40.453-90.353 90.353h451.765c-.001-49.901-40.453-90.353-90.354-90.353z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#88888f",
      }}
      d="M233.412 248.471h45.176v195.765h-45.176z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#aeadb3",
      }}
      d="M143.059 248.471h45.176v195.765h-45.176z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#88888f",
      }}
      d="M323.765 248.471h45.176v195.765h-45.176z"
    />
    <path
      className="trash dropzone"
      style={{
        fill: "#cfcdd2",
      }}
      d="M391.529 90.353H256v90.353h225.882c0-49.901-40.452-90.353-90.353-90.353z"
    />
  </svg>
);

export default SvgComponent;
