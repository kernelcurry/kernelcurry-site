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
      const members = data[0];
      const kills = data[1];
      calculate_rankings(members, kills);
    })
    .catch(err => {
      console.log(err);
      $("div.tap-titans table.rankings").replaceWith("<h2>ERROR LOADING MEMBER INFORMATION</h2>");
      $("div.tap-titans table.rankings").replaceWith("<h2>ERROR LOADING KILL INFORMATION</h2>");
    });
}

function calculate_rankings(members, kills) {
  console.log(members, kills);


  members.forEach(function(member, m_index) {
    members[m_index].dkp = 0;
    console.log("ranking: " + member.username);

    kills.forEach(function(kill, k_index) {
      // check to see if we should count this kill for this member
      var join_date = Date.parse(member.joined);
      var kill_date = Date.parse(kill.date);
      if (join_date > kill_date) {
        return;
      }
      
      kill.damage.forEach(function(damage, d_index) {
        if (damage.username.match(/kernelcurry/i)) {
          console.log(damage);
        }
      });
    });

    console.log(member.username + " : " + member.dkp);
  });

}

init();