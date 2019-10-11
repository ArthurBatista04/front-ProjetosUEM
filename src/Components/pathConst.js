const PathName = window.location.host.includes("din.uem.br")
  ? `https://${window.location.host}`
  : "http://localhost:3001";

export default PathName;
