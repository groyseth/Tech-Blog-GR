const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.getElementById('titleId').value
  const body = document.getElementById('bodyId').value

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
