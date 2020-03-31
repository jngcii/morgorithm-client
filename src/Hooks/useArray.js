import { useState } from "react";

export default defaultArray => {
	const [array, setArray] = useState(defaultArray);

	const append = e => {
    array.push(e);
    setArray(array);
  }

  const remove = e => {
    const idx = array.indexOf(e);
    if (idx > -1) {
      array.splice(idx, 1);
      setArray(array);
    }
  }

	return { array, append, remove };
};