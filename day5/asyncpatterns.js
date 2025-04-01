function fetchUserData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John' });
      }, 1000);
    });
  }
  
  // Using async/await
  async function getUserInfo() {
    try {
      const userData = await fetchUserData();
      console.log(userData);
      return userData;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call async function
  getUserInfo().then(data => console.log('Processed data:', data));