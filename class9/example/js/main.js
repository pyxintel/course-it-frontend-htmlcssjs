function openMenu() {
  document.getElementById('menu').classList.add('open');
  document.getElementById('menu-backdrop').classList.add('open');
}

function closeMenu() {
  document.getElementById('menu').classList.remove('open');
  document.getElementById('menu-backdrop').classList.remove('open');
}

function sendMessage(event) {
  event.preventDefault()
  fetch('http://localhost:3100/message', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    })
  }).then(() => {
    alert('Mensagem enviada!')
    event.target.elements.name.value = ''
    event.target.elements.email.value = ''
    event.target.elements.message.value = ''
  }).catch(err => {
    console.error(err)
    alert('Houve um erro!')
  })
}