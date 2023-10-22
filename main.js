document.addEventListener("DOMContentLoaded", function() {
    const progress = document.querySelector('.progress');
    const percentage = document.querySelector('.progress span');

    let per = 0;
    function progressLoad() {
        if (per < 70) {
            progress.style.width = `${per}%`;
            percentage.innerHTML = `${per}%`;
            per++;
        }
    }

    setInterval(progressLoad, 90);
});
