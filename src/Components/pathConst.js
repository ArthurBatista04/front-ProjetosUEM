const PathName =
  window.location.host.includes('din.uem.br') ||
  window.location.host.includes('secompuem.com')
    ? `https://${window.location.host}`
    : 'http://localhost:3001';

export default PathName;
