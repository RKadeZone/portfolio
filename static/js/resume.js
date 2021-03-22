function changeFontAwesomeArrowDir(changeID) {

    if ( document.getElementById(changeID).classList.contains('fa-arrow-up') ) {
        document.getElementById(changeID).classList.remove('fa-arrow-up');
        document.getElementById(changeID).classList.add('fa-arrow-down');
        return;
    }

    // Declare all variables
    var i, panelcontent;

        // Get all elements with class="panel-collapse" and hide them
        panelcontent = document.getElementsByClassName("panel-collapse");
        for (i = 0; i < panelcontent.length; i++) {
            panelcontent[i].classList.remove('in');
        }

    // Set All Arrow IDs to Down
    var list = [
        "CoursesSeriesArrows",
        "VideoSeriesArrows",
        "BooksSeriesArrows",
        "OculusSeriesArrows",
        "AdaptiveSeriesArrows",
        "MozillaSeriesArrows",
        "MicrosoftSeriesArrows",
        "NintendoSeriesArrows",

    ]
    for(var i = 0, size = list.length; i < size ; i++){
        var id_ = list[i];
        document.getElementById(id_).classList.remove('fa-arrow-up');
        document.getElementById(id_).classList.add('fa-arrow-down');
    }

    // Set dir for panel
    document.getElementById(changeID).classList.remove('fa-arrow-down');
    document.getElementById(changeID).classList.add('fa-arrow-up');
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}