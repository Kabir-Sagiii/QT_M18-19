function myFetch(valid) {
  var promise = new Promise(function (resolve, reject) {
    if (valid) {
      resolve({
        data: [{}, {}, {}, {}],
      });
    } else {
      reject({
        error: "Something went wrong",
      });
    }
  });

  return promise;
}

async function getPromiseData() {
  try {
    var res = await myFetch(false);
    console.log("try block: ");
    console.log(res);
  } catch (error) {
    console.log("catch block: ");
    console.log(error);
  }
}

getPromiseData();

// var promise = myFetch(true);

// promise
//   .then((res) => {
//     console.log("then executed");
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("catch executed");
//     console.log(error);
//   });
