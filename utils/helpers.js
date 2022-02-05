module.exports = {
  // Formats date to display correctly when passed into handlebars
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
};
// module.exports = {
//   format_time: (date) => {
//     return date.toLocaleTimeString();
//   },
//   format_date: (date) => {
//     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
//       new Date(date).getFullYear() + 5
//     }`;
//   },
// };