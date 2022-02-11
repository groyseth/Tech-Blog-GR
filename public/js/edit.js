// const postId = document.querySelector('input[name="post-id"]').value;
// const postId = document.querySelector('.postId').dataset.id;
// console.log(postId);
const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  await fetch(`/api/post/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function(event) {
  const id = event.target.getAttribute('data-id');
console.log(id);

  await fetch(`/api/post/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);

var deleteButton = document.querySelectorAll('.delete-btn')
  deleteButton.forEach(btn => {
    btn.addEventListener('click', deleteClickHandler);
  });
  


