const selectBox = document.getElementById('delivery_time');

function postData() {
  const selectedValue = selectBox.value;
  const attributes = {
    attributes: {
      'delivery_time': selectedValue
    }
  };
  fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(attributes),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  console.log("test")
}

selectBox.addEventListener('change', postData);
window.addEventListener('load', postData);