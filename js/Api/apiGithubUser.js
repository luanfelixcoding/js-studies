async function searchUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Responde Error status: ${response.status}`);
    }

    const data = await response.json();

    console.log(`Name: ${data.name}`);
    console.log(`Public Repositories: ${data.public_repos}`);
  } catch (error) {
    console.error("Error in searching data: " + error);
  }
}

searchUserData("google");
