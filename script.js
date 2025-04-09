
const sampleData = {
  "123456": {
    name: "ALI ABDULKADER",
    nationality: "EGYPT",
    rank: "COOK",
    photo: "ALI.JPG",
    certificates: [
      { name: "Basic Safety Training", issue: "2023-01-15", expiry: "2028-01-15" },

    ]
  }
};

function searchSeafarer() {
  const code = document.getElementById('seafarerCode').value.trim();
  const data = sampleData[code];

  if (data) {
    document.getElementById('result').style.display = 'block';

    document.getElementById('name').textContent = data.name;
    document.getElementById('nationality').textContent = data.nationality;
    document.getElementById('rank').textContent = data.rank;
    document.getElementById('photo').src = data.photo;

    if (data.certificates.length > 0) {
      const cert = data.certificates[0];
      document.getElementById('certName').textContent = cert.name;
      document.getElementById('certIssue').textContent = cert.issue;
      document.getElementById('certExpiry').textContent = cert.expiry;
    }
  } else {
    alert('No data found for this code.');
    document.getElementById('result').style.display = 'none';
  }
}
