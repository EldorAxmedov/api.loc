// async function getPosts(){
// let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'no-cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     //body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
// let posts = await res.json();
// console.log(posts);
// }


async function getPosts(){
let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
let posts = await response.json();
posts.forEach((post)=>{
	document.querySelector('.post-list').innerHTML+=`
	<div class="row post-list">
<div class="card" style="width: 18rem;">
<h5 class="card-title">
	${post.title}
</h5>
<p class="card-text">
${post.body}
</p>
<a href="" class="card-link"> Batafsil</a>
</div>
</div>`
})
}
getPosts();