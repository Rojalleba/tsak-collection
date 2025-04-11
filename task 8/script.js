fetch('https://randomuser.me/api/?results=5') // sends request
  .then(response => {
    console.log("response : ", response);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("data : ", data);
    const userList = document.getElementById('userList');
    data.results.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name.first} ${user.name.last} (${user.email})`;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
