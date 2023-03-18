const button = document.queryselector('button');

button.addEventListener('click', () => {
  promiseAPI1()
    .then(() => promiseAPI2())
    .then(() => promiseAPI3())
    .catch((error) => console.error(error));
});

function promiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://api.example.com/data1')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    }, 1000);
  });
}

function promiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://api.example.com/data2')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Resolve the promise
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    }, 2000);
  });
}

function promiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://api.example.com/data3')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    }, 3000);
  });
}
