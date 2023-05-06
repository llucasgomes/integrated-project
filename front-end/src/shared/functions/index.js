export const newData = (data) => {
    let date = data.slice(0, 10);

    return (date = date.split("-").reverse().join("-"));
  };