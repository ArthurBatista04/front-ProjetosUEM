export const handleChange = (self, e) => {
  self.setState({ type: parseInt(e.target.value) });
};

export const handleSubmit = self => {
  self.setState({ redirect: true });
};
