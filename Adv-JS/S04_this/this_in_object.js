var obj = {
  name: "Sagar",
  fn: function () {
    console.log(this);
  },

  fnArrow: () => {
    console.log(this);
  },
};

// obj.fn();
obj.fnArrow();
