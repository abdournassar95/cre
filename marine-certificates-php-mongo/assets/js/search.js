function searchSeafarer() {
  const code = document.getElementById('seafarerCode').value.trim();
  fetch(`/api.php?id=${code}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.name) {
        document.getElementById('result').style.display = 'block';
        document.getElementById('photo').src = 'uploads/' + data.photo;
        document.getElementById('name').textContent = data.name;
        document.getElementById('nationality').textContent = data.nationality;
        document.getElementById('rank').textContent = data.rank;
        document.getElementById('certName').textContent = data.certificates[0].name;
        document.getElementById('certIssue').textContent = data.certificates[0].issue;
        document.getElementById('certExpiry').textContent = data.certificates[0].expiry;
      } else {
        alert('No data found.');
      }
    });
}
