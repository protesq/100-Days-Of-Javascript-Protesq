
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Formun varsayılan gönderme işlemini durdur

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  alert('Form başarıyla gönderildi!');
  console.log(name, email, age);
});
