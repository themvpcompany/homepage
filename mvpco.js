window.onload = function() {
    document.getElementById('start').addEventListener('click', function() {
        location.href = (window.location.href.substring(0, window.location.href.length-9)) + "/hello/index.html"
    })
}
window.onload = function() {
    document.getElementById('team').addEventListener('click', function() {
        navControls('team_section')
    })
    document.getElementById('value').addEventListener('click', function() {
        navControls('value_section')
    })
}

function navControls(section_id) {
    document.getElementById('animation_break').className = 'active'
    // document.getElementById('team_section').className = 'hidden'
    // document.getElementById('value_section').className = 'hidden'

    // var section = document.getElementById(section_id)
    // section.className = ''
}
