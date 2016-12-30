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

function addRow(rank, username, dkp) {
  $("div.tap-titans table.rankings tr:last").after("<tr><td>" + rank + "</td><td>" + username + "</td><td>" + dkp + "</td></tr>");
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

      var score = 0;

      kill.damage.forEach(function(damage, d_index) {
        var username_regex = new RegExp(member.username, 'i')
        if (damage.username.match(username_regex)) {
          var now = new Date();
          var day_diff = Math.round((now - kill_date) / (1000 * 60 * 60 * 24));

          var rolling_avg_day = 15;
          if (day_diff > rolling_avg_day) {
            return;
          }

          score = damage.value / 10000 * (1 - (day_diff / (rolling_avg_day + 1)));
        }
      });

      if (score === 0) {
        score = -1;
      }

      member.dkp = member.dkp + score;
    });

    member.dkp = parseFloat(member.dkp.toFixed(4))

    console.log(member.username + " : " + member.dkp);
  });

  console.log('Results');

  // sort members by dkp
  members.sort(function(a, b) {
    return b.dkp - a.dkp;
  });

  // add members to table
  members.forEach(function(member, m_index) {
    console.log(member.username + " : " + member.dkp);
    addRow(m_index, member.username, member.dkp);
  });
}

jQuery(document).ready(function($) {
  init();
});