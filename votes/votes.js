

const saveData = (route, payload) => {
  return fetch(`https://youthgroup.cmcculloh.com/${route}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(res => res.json())
}


const postVote = (contact, msg) => {

}

const choosePizza = (contact, pizza, callback) => {
  const route = `pizzaPreference/${contact}`;
  const payload = { "pizzaPreference": pizza };

  saveData(route, payload)
    .then((data) => {
      console.log('save complete', data);
      return data;
    })
    .then((data) => callback(data));
}

const hide = (selector) => document.querySelector(selector).classList.add('hidden')

const show = (selector) => document.querySelector(selector).classList.remove('hidden')

const loaders = [
  //'<iframe src="https://giphy.com/embed/qSAXaSscOW69sAHfjT" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
  '../images/thinking.gif/',
  '../images/pizzaloader.gif',
  '../images/catbox.gif',
  '../images/alice.gif',
  '../images/sun.gif',
  '../images/forklift.gif',
  '../images/loadingcat.gif',
  '../images/nyan.gif',
  '../images/pusheen.gif',
  '../images/nyankeyboard.gif',
  '../images/ok.gif',
  '../images/batman.gif',
  '../images/kermit.gif',
  '../images/babyyoda.gif',
  '../images/lolboy.gif',
  '../images/takeyourtime.gif',
  '../images/sonic.gif',
  '../images/spongebob.gif',
  '../images/giraffe.gif',
  '../images/grinch.gif',
  '../images/indy.gif',
  '../images/owl.gif',
  '../images/puppies.gif',
]

const randomLoader = () => {
  const randNum = Math.floor(Math.random() * loaders.length);
  return `<img src="${loaders[randNum]}" />`
}

const showRandomLoader = () => {
  document.querySelector('#submitting loader').innerHTML = randomLoader();
}

const vote = () => {
  console.log('click');
  const contact = document.querySelector('#contact').value;
  const pizza = document.querySelector('#pizza').value;

  hide('#presubmit');
  show('#submitting');

  const callback = () => {
    hide('#submitting');
    show('#postsubmit');
  }

  choosePizza(contact, pizza, callback)
}