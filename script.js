function searchPose() {
    let input = document.getElementById('search').value.toLowerCase();
    let poses = document.querySelectorAll('.pose-card');

    poses.forEach(pose => {
        let name = pose.getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            pose.style.display = "block";
        } else {
            pose.style.display = "none";
        }
    });
}
