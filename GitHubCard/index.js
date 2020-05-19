/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// get .class from doc
let containerCards = document.querySelector('.cards');

// axios.get function
axios.get ('https://api.github.com/users/sbolans9')
  .then(items => {
    containerCards.appendChild(card(items.data));
    for(let i = 0; i<followersArray.length; i++){
      axios.get(followersArray[i])
        .then(items => {
          containerCards.appendChild(card(items.data));
        })
      }
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/tetondan','https://api.github.com/users/dustinmyers','https://api.github.com/users/justsml','https://api.github.com/users/luishrd','https://api.github.com/users/bigknell',];
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function card(arr){
 // Creating Tags
 divCard = document.createElement('div');
 img = document.createElement('img');
 divCardInfo = document.createElement('div');
 cardInfoH3 =  document.createElement('h3');
 cardInfoP1 = document.createElement('p');
 cardInfoP2 = document.createElement('p');
 cardInfoP3 = document.createElement('p');
 cardInfoA = document.createElement('a');
 cardInfoP4 = document.createElement('p');
 cardInfoP5 = document.createElement('p');
 cardInfoP6 = document.createElement('p');

 //Adding Class Names
 divCard.classList.add('card');
 divCardInfo.classList.add('card-info');
 cardInfoH3.classList.add('name');
 cardInfoP1.classList.add('username');


 // Placing tags into place
 divCard.appendChild(img);
 divCard.appendChild(divCardInfo);
 divCardInfo.appendChild(cardInfoH3);
 divCardInfo.appendChild(cardInfoP1); 
 divCardInfo.appendChild(cardInfoP2);
 divCardInfo.appendChild(cardInfoP3);
 cardInfoP3.appendChild(cardInfoA);
 divCardInfo.appendChild(cardInfoP4);
 divCardInfo.appendChild(cardInfoP5);
 divCardInfo.appendChild(cardInfoP6);

//Add data tags
  img.src = arr.avatar_url;
  cardInfoH3.textContent = arr.name;
  cardInfoP1.textContent = arr.login;
  cardInfoP2.textContent = `Location: ${arr.location}`;
  cardInfoP3.textContent = 'Profile:';
  cardInfoA.href = arr.html_login;
  cardInfoA.textContent = arr.html_login;
  cardInfoP4.textContent = `Followers: ${arr.followers}`;
  cardInfoP5.textContent = `Following: ${arr.following}`;
  cardInfoP6.textContent = `Bio ${arr.bio}`;

  // return function
  return divCard
}





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
