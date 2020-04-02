import { useState } from "react";

export default defaultArray => {
	const [array, setArray] = useState(defaultArray);

	const append = e => {
    const idx = array.indexOf(e);

    return new Promise(function(resolve, _) {
      if (idx === -1) {
        array.push(e);
        setArray(array);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  const remove = e => {
    const idx = array.indexOf(e);

    return new Promise(function(resolve, reject) {
      if (idx > -1) {
        array.splice(idx, 1);
        setArray(array);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

	return { array, append, remove };
};