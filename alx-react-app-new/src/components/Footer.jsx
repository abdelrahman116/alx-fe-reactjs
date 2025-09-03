function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        height: "30vh",
        backgroundColor: "navy",
        // alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          textAlign: "center",
          bottom: "0",
        }}
      >
        © 2023 City Lovers
      </p>
    </footer>
  );
}
export default Footer;
