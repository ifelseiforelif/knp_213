const my_form = document.getElementById("new_product");
const HOST = "http://localhost:3000/product";
const sendData = (data) => {
  fetch(HOST, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      window.location.href = HOST;
    })
    .catch((err) => console.log(err));
};

my_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);
  sendData(data);
});
