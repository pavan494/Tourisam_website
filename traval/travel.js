function toggleContent() {
    var content = document.getElementById("companyContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
function showData(interest) {
    // Hide all images, text, and tables first
    var containers = document.querySelectorAll('.space > *');
    containers.forEach(function(container) {
        container.style.display = 'none';
    });

    // Show the image corresponding to the interest
    var imageToShow = document.getElementById(interest + 'Image');
    if (imageToShow) {
        imageToShow.style.display = 'block';
    }

    // Show the text content corresponding to the interest
    var textToShow = document.getElementById(interest + 'Text');
    if (textToShow) {
        textToShow.style.display = 'block';
    }

    // Show the table corresponding to the interest
    var tableToShow = document.getElementById(interest + 'Table');
    if (tableToShow) {
        tableToShow.style.display = 'block';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                this.style.marginBottom = '0';
            } else {
                answer.style.display = 'none';
                this.style.marginBottom = '10px'; // Adjust as needed
            }
        });
    });
});

function showBookingForm() {
    var form = document.getElementById("bookingForm");
    form.classList.toggle("show");
  }