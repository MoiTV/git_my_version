// instciation of the github class
const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', function(e) {
    const input = e.target.value;

    if (input !== '') {
        github.getProfile(input)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('Profile Not Found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            });
    } else {
        ui.clearProfile();
    }
});