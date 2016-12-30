console.clear();

let members,
    kills

// function: Load member data
function load_members() {
  return fetch("https://kernelcurry.com/js/tap-titans/members.json")
    .then(res => res.json());
}

// function: Load kill data
function load_kills() {
  return fetch("https://kernelcurry.com/js/tap-titans/kills.json")
    .then(res => res.json())
}

function init() {
  Promise.all([
    load_members(),
    load_kills()
  ])
  .then(data => {
    console.log(data)
    calculate_rankings(members, kills);
  })
  .catch(err => {
    console.log(err);
    $("div.tap-titans table.rankings").replaceWith("<h2>ERROR LOADING MEMBER INFORMATION</h2>");   
    $("div.tap-titans table.rankings").replaceWith("<h2>ERROR LOADING KILL INFORMATION</h2>");
  });
}
function calculate_rankings(members, kills) {
  // todo: impliment
}

init();