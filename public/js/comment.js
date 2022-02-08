const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('#postId').dataset.id;
  const body = document.querySelector('#commentBody').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // document.location.reload();
    document.location.replace('/');
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
