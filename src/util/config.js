export default {
  get apiUrl() {
    return process.env.NODE_ENV === 'production'
      ? '/'
      : 'http://localhost:3000/';
  },
};
