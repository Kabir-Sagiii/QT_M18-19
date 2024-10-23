// console.log(this);

function f1() {
  console.log(this);
}

const fn = () => {
  console.log(this);
};

fn();
