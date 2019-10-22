export const handleChange = (self, e) => {
  const name = e.target.name;
  const value = e.target.value;
  self.setState({ [name]: value });
};

export const handleClick = (self, e) => {
  e.preventDefault();
  self.setState({ showCards: true });
};
